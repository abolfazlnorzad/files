<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MembershipRequest;
use App\Http\Resources\MembershipCollection;
use App\Models\Membership;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MembershipController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return MembershipController
     */
    public function index()
    {
        return new MembershipCollection(Membership::paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return Response
     */
    public function store(MembershipRequest $request)
    {
        Membership::create($request->validated());
        return response('created', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param Membership $membership
     * @return Response
     */
    public function show(Membership $membership)
    {
        return $membership;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Membership $membership
     * @return Response
     */
    public function update(MembershipRequest $request, Membership $membership)
    {
        $membership->update($request->validated());
        return response(['ok'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Membership $membership
     * @return Response
     */
    public function destroy(Membership $membership)
    {
        $membership->delete();
        return response('deleted', 200);
    }
}
