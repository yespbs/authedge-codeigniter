<?php

class UserSeeder extends Seeder {

    public function run()
    {
        $this->db->truncate('users');

        $data = [
            'name' => 'Priyabrata',
            'email' => 'yespbs@gmail.com',
            'password' => '123456',
        ];
        $this->db->insert('users', $data);       
    }

}