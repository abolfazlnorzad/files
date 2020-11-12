<?php


namespace App\Traits;


use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;

trait TokenTrait
{

    /**
     * @return mixed
     */
    public function getContent()
    {
        return json_decode($this->response->getContent());
    }

    /**
     * @param Request $request
     * @param null $email
     * @param null $password
     * @return
     */
    public function getToken(Request $request, $email = null, $password = null)
    {
        $req = Request::create(
            '/oauth/token',
            'post',
            [
                'client_id' => config('token.passport.id'),
                'client_secret' => config('token.passport.secret'),
                'grant_type' => 'password',
                'username' => $request->email ?? $email,
                'password' => $request->password ?? $password,
            ]
        );
        return $this->response = app()->handle($req);

    }

}
