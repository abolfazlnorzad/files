<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AddAccessTokenFromUrl
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->has('access_token')){
            $request->headers->set('Authorization','Bearer '. $request->access_token);
        }
        return $next($request);
    }
}
