<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\MembershipResourceCollection;
use App\Models\Membership;
use Illuminate\Http\Request;

class MembershipController extends Controller
{
    public function index()
    {
       return new MembershipResourceCollection(
            Membership::orderBy('priority')->get()->groupBy('is_yearly')
        );
    }
}
