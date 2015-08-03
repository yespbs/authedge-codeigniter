<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * CodeIgniter Utility Helpers
 *
 * @package		CodeIgniter
 * @subpackage	Helpers
 * @category	Helpers
 * @author		EllisLab Dev Team
 * @link		http://codeigniter.com/user_guide/helpers/array_helper.html
 */

// ------------------------------------------------------------------------

if ( ! function_exists('encrypt_string'))
{
	/**
	 * Encode
	 *
	 *
	 * @param	string
	 * @return	string
	 */
	function encrypt_string($plain_text)
	{
		$ci = &get_instance();
		// Switch to the MCrypt driver
		$ci->encryption->initialize(array('driver' => 'mcrypt', 'cipher'=>'blowfish'));

		return  $ci->encryption->encrypt($plain_text);
	}
}

if ( ! function_exists('decrypt_string'))
{
	/**
	 * Decode
	 *
	 * @param	string
	 * @return	string
	 */
	function decrypt_string($cipher_text)
	{
		$ci = &get_instance();
		// Switch to the MCrypt driver
		$ci->encryption->initialize(array('driver' => 'mcrypt','cipher'=>'blowfish'));

		return  $ci->encryption->decrypt($cipher_text);
	}
}