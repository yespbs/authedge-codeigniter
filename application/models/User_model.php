<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model {

    public function __construct()
    {
            parent::__construct();
    }

    public function wherEmail( $email ){
    	
    	$query = $this->db->get_where('users', ['email' => $email], 1, 0);

    	if ($query->num_rows() > 0)
		{
    		return $query->row();
    	}

    	return false;
    }

}