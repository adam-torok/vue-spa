<?php

namespace Database\Factories;

use App\Models\Advert;
use Illuminate\Database\Eloquent\Factories\Factory;

class AdvertFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Advert::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => 1,
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph,
            'city' => $this->faker->city,
            'county' => $this->faker->state,
            'image_name' => '/uploads/images/advert_images/base_image.png',
            'console_type' => 'xbox',
            'advert_type' => 'sell',
            'price' => $this->faker->numberBetween(1999, 20000),
            'shipping' => 0,
            'condition' => 'New',
            'shelfed' => 0,

        ];
    }
}
