<?php

namespace App\Http\Resources;

use App\Models\File;
use Illuminate\Http\Resources\Json\ResourceCollection;

class FileUserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data'=>$this->collection->map(function ($item){
                return $item->append('price_toman');
            })
        ];
    }
}
