<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DiscountRequest;
use App\Http\Resources\DiscountCollection;
use App\Models\Discount;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DiscountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return new DiscountCollection(
            Discount::paginate(1)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return Response
     */
    public function store(DiscountRequest $request)
    {
        $data = $request->validated();
        Discount::create($data);
        return response('ok', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param Discount $discount
     * @return Discount
     */
    public function show(Discount $discount)
    {
        return $discount;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Discount $discount
     * @return Response
     */
    public function update(Request $request, Discount $discount)
    {
        $data = $request->only('code', 'percent');
        $discount->update($data);
        return response('ok', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Discount $discount
     * @return Response
     */
    public function destroy(Discount $discount)
    {
        $discount->delete();
        return response('ok',200);
    }
}
