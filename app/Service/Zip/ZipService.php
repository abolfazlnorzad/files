<?php


namespace App\Service\Zip;


use App\Models\Download;
use App\Models\File;
use Illuminate\Support\Str;

class ZipService
{

    protected $file;
    protected $zip;
    protected $zip_name;
    protected $password;
    protected $link;

    public function __construct()
    {
        if (!\Illuminate\Support\Facades\File::isDirectory(public_path('zip'))) {
            \Illuminate\Support\Facades\File::makeDirectory(public_path('zip'));
        }
        return $this;
    }

    public function handle()
    {
        return $this->setProps()->generateZip()->getDownload();
    }

    public function downloadFile(File $file)
    {
        $this->file = $file;
        return $this->handle();
    }

    public function generateZip()
    {

        $this->zip->open('zip/'.$this->zip_name, \ZipArchive::CREATE);
        $this->zip->addFile($this->file->storage_path, $this->file->file);
        $this->zip->setEncryptionName($this->file->file, \ZipArchive::EM_AES_256, $this->password);
        $this->zip->close();
        return $this;
    }

    public function setProps()
    {
        $this->zip_name =  $this->file->slug . '_' . Str::random(3) . '_' . '.zip';
        $this->link = Str::random(7);
        $this->password = mt_rand(10000, 99999);
        $this->zip = new \ZipArchive();
        return $this;
    }

    public function getDownload()
    {
        return Download::create([
            'link' => $this->link,
            'password' => $this->password,
            'zip_name' => $this->zip_name,
            'file_id' => $this->file->id,
            'user_id' => request()->user()->id,
            'expired_at' => now()->addHour(),
        ]);
    }


}
