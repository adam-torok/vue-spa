<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'username' => $this->faker->name,
            'full_name' => $this->faker->name,
            'email' => 'woltery99@outlook.hu',
            'profile_picture' => '/uploads/images/profile_images/base_profile.jpg',
            'email_verified_at' => now(),
            'password' => bcrypt('asd123'),
            'remember_token' => Str::random(10),
        ];
    }
}
