<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Hekmatinasser\Verta\Facades\Verta;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return Payment::where('is_payed', true)
            ->get()
            ->groupBy('type')
            ->map(function ($payment) {
                return [
                    'price' => $payment->sum('price'),
                    'discount_price' => $payment->sum('discounted_price')
                ];
            });

    }

    public function charts()
    {
        $sevenDaysInfo = collect()->times(7, function ($number) {
            return [
                'data' => [
                    'label' => \verta()->subDays($number - 1)->format('l'),
                    'data' => 0,
                ],
                'time' => now()->subDays($number - 1)->format('Y-m-d')
            ];

        })->pluck('data', 'time')->sortKeys();

        $PayType = Payment::where('is_payed', true)
            ->get()
            ->groupBy('type')
            ->map
            ->groupBy('create_time')
            ->map(function ($payments) use ($sevenDaysInfo){
               return $sevenDaysInfo->merge($payments->map(function ($payment){
                   return [
                       'label' => verta($payment->first()->created_at)->format('Y-m-d'),
                       'data' => $payment->sum('price')
                   ];
               }));

            });

        return $PayType->merge(collect(['totale'=> $this->MonthlyInfo()]))
            ->map(function ($pay){
                return[
                    'labels'=>$pay->pluck('label'),
                    'data'=>$pay->pluck('data'),
                ];
            });

    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function MonthlyInfo(): \Illuminate\Support\Collection
    {
        $sumPayMonthlyByDay = Payment::where('is_payed', true)
            ->get()
            ->groupBy('create_time')
            ->map(function ($payment) {
                return [
                    'label' => verta($payment->first()->created_at)->format('Y-m-d'),
                    'data' => $payment->sum('price')
                ];
            });

        $allDay = collect()->times(30, function ($number) {
            return [
                'data' => [
                    'label' => verta()->subDays($number - 1)->format('Y-m-d'),
                    'data' => 0
                ],
                'time' => now()->subDays($number - 1)->format('Y-m-d')
            ];
        })->pluck('data', 'time')->sortKeys();

        return $allDay->merge($sumPayMonthlyByDay);
    }
}
