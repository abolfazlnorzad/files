<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserCollection;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return UserCollection
     */
    public function index()
    {
        $allUsers = User::all();
        return new UserCollection($allUsers);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param UserRequest $request
     * @return Response
     */
    public function store(UserRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);
        return response(['user'=>$user], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return User|\App\Moldes\User
     */
    public function show(User $user)
    {
        return $user;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param UserRequest $request
     * @param User $user
     * @return void
     */
    public function update(UserRequest $request, User $user)
    {
        $data=$request->validated();
        if (is_null($data['password'])) unset($data['password']);
        else{
            $data['password']=bcrypt($data['password']);
        }
        $user->update($data);
        return response('ok',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Moldes\User $user
     * @return Response
     */
    public function destroy(User $user)
    {
        //
    }
}
