<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if (request()->method === 'POST' && request()->method === 'post') {
            return [
                'name' => ['required', 'string'],
                'email' => ['required', 'string', 'email', 'unique:users,email'],
                'password' => ['required', 'min:8', 'string'],
                'isAdmin' => ['nullable'],
            ];
        } else {

            return [
                'name' => 'required|max:255|string',
                'email' => 'required|max:255|email|unique:users,email,' . request('id'),
                'password' => 'nullable',
                'isAdmin' => 'nullable',
            ];
        }
    }

}
