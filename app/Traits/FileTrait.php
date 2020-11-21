<?php


namespace App\Traits;


use App\Http\Requests\FileRequest;
use App\Models\File;
use Illuminate\Support\Facades\DB;

trait FileTrait
{
    /**
     * @param $request
     * @param null $file_name
     * @param null $image_name
     * @param File|null $file
     * @return mixed
     */
    public function dataForCrud($request, $file_name = null, $image_name = null ,File $file = null)
    {
        $data = $request->except('selectedTags', 'file','image');

        if ($file_name) {
            $data['file'] = $file_name;
        }
        if ($image_name) {
            $data['image'] = $image_name;
        }

        if ($file !== null) {
            tap($file)->update($data);
        } else {
            $file = File::create($data);
        }
        return $file;
    }

    /**
     * @param FileRequest $request
     * @param File|null $file
     * @return mixed
     */
    public function makeFile(FileRequest $request, File $file = null)
    {
        if ($request->hasFile('file')) {
            if ($file !== null) {
                $this->file->remove($file->file_src);
            }
            return $this->file->storeStorage($request->file('file'));

        }
        return null;
    }

    /**
     * @param FileRequest $request
     * @param File|null $file
     * @return mixed
     */
    public function makePublicImage(FileRequest $request, File $file = null)
    {
        if ($request->hasFile('image')) {
            if ($file !== null) {
                $this->file->removePublicImage($file->image_src);
            }
            return $this->file->storePublicImage($request->file('image'));

        }
        return null;
    }


    public function createOrUpdateFile(FileRequest $request, File $file = null)
    {
        return DB::transaction(function () use ($request, $file) {
            try {
                if ($file !== null) {
                    $file_name = $this->makeFile($request, $file);
                    $image_name = $this->makePublicImage($request, $file);
                    $file = $this->dataForCrud($request, $file_name, $image_name, $file);
                } else {
                    $file_name = $this->makeFile($request);
                    $image_name = $this->makePublicImage($request);
                    $file = $this->dataForCrud($request, $file_name, $image_name);
                }
                $file->syncCategories($request->selectedTags);
                return 200;
            } catch (\Exception $e) {
                DB::rollBack();
                $this->file->remove('files/' . $file_name);
                return 500;
            }
        });
    }

}
