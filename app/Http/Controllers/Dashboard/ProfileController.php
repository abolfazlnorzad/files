<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;


class ProfileController extends Controller
{
    public function update(ProfileRequest $request, User $user)
    {
        $data = $request->only(['name', 'email']);

        if ($request->password) {
            $data['password'] = $request->password;
        }

        if ($request->profile && $request->profile_name) {
            $data['profile'] = $request->user()->id . '.' .  Str::afterLast($request->profile_name, '.');

            $src = public_path('profiles/') . $data['profile'];

            Image::make($request->profile)
                ->fit(100)
                ->save($src);
        }
        $user->update($data);

        return response(['ok'], 200);
    }
}
