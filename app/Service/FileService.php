<?php


namespace App\Service;


use Illuminate\Support\Str;

class FileService
{

    public function storeStorage($file): string
    {
        $file_name = $this->setFileName($file);
        $file->storeAs(
            'files', $file_name
        );

        return $file_name;
    }

    /**
     * @param $file
     * @return string
     */
    public function setFileName($file): string
    {
        return Str::random(7) . $file->getClientOriginalName();

    }

}