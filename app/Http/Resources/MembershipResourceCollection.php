<?php

namespace App\Http\Resources;

use App\Models\Membership;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MembershipResourceCollection extends ResourceCollection
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
            'yearly' => $this[1],
            'monthly' => $this[0]
        ];

    }
}
