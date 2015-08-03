<?php

/**
 * @deprecate
 */ 
class Migrate extends CI_Controller
{

    /*function __construct()
    {
        parent::__construct();
 
        // can only be called from the command line
        if (!$this->input->is_cli_request()) {
            exit('Direct access is not allowed');
        }
 
        // can only be run in the development environment
        if (ENVIRONMENT !== 'development') {
            exit('Wowsers! You don\'t want to do that!');
        }
 
        // initiate faker
        $this->faker = Faker\Factory::create();
 
        // load any required models
        $this->load->model('user_model');
    }*/

    /**
     * stevethomas$  php index.php migrate index
     */ 
    public function index()
    {
        $this->load->library('migration');

        if ($this->migration->current() === FALSE)
        {
            show_error($this->migration->error_string());
        }
    }

    /**
     * seed local database
     * stevethomas$  php index.php migrate seed
     */
   /* function seed()
    {
        // purge existing data
        $this->_truncate_db();
 
        // seed users
        $this->_seed_users(25);
 
        // call more seeds here...
    }*/
 
    /**
     * seed users
     *
     * @param int $limit
     */
    /*function _seed_users($limit)
    {
        echo "seeding $limit users";
 
        // create a bunch of base buyer accounts
        for ($i = 0; $i < $limit; $i++) {
            echo ".";
 
            $data = array(
                'username' => $this->faker->unique()->userName, // get a unique nickname
                'password' => '123456', // run this via your password hashing function
                'firstname' => $this->faker->firstName,
                'surname' => $this->faker->lastName,
                'address' => $this->faker->streetAddress,
                'city' => $this->faker->city,
                'state' => $this->faker->state,
                'country' => $this->faker->country,
                'postcode' => $this->faker->postcode,
                'email' => $this->faker->email,
                'email_verified' => mt_rand(0, 1) ? '0' : '1',
                'phone' => $this->faker->phoneNumber,
                'birthdate' => $this->faker->dateTimeThisCentury->format('Y-m-d H:i:s'),
                'registration_date' => $this->faker->dateTimeThisYear->format('Y-m-d H:i:s'),
                'ip_address' => mt_rand(0, 1) ? $this->faker->ipv4 : $this->faker->ipv6,
            );
 
            $this->user_model->insert($data);
        }
 
        echo PHP_EOL;
    }
 
    private function _truncate_db()
    {
        $this->user_model->truncate();
    }*/

}