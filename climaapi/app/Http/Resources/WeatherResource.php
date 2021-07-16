<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WeatherResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'city' => $this->name,
            'lat' => [
                'coord' => 'lat',
            ],
            'lon' => [
                'coord' => 'lon',
            ],
            'humidity' => [
                'main' => 'humidity',
            ]
        ];
    }
}
