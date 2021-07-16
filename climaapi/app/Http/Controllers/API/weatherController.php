<?php

namespace App\Http\Controllers\API;

use App\Models\Record;
use App\Http\Requests\SaveRecordRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Http\Resources\WeatherResource;

class weatherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return Record::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($data)
    {
        $record = new Record;
        $record->city = $data['name'];
        $record->lat = $data['coord']['lat'];
        $record->lon = $data['coord']['lon'];
        $record->humidity = $data['main']['humidity'];
        $record->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($city)
    {
        $response = Http::get('api.openweathermap.org/data/2.5/weather?q='.$city.'&appid=684c7ca5cfdeb1eb05e7b0aa57b0647e');
        $data = $response->json();
        $weather['name'] =  $data['name'];
        $weather['lat'] = $data['coord']['lat'];
        $weather['lon'] = $data['coord']['lon'];
        $weather['humidity'] = $data['main']['humidity'];
        $this->store($response->json());
        return $weather;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
