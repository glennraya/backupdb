<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            'Software Engineer', 'DevOps', 'Database Analyst', 'Cyber Security Consultant', 'Project Manager',
            'System Architect', 'QA Engineer', 'Product Owner', 'UI/UX Designer', 'Scrum Master',
            'Data Scientist', 'Frontend Developer', 'Backend Developer', 'Mobile App Developer', 'Business Analyst',
            'Cloud Solutions Architect', 'Machine Learning Engineer', 'Network Administrator', 'IT Support Specialist', 'Full Stack Developer',
        ];

        foreach ($roles as $index => $role) {
            User::create([
                'name' => fake()->name(),
                'role' => $role,
                'email' => fake()->unique()->safeEmail(),
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ]);
        }
    }
}
