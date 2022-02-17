<?php
/**
 * Class handles unit tests for GatherPress\Core\Attendee.
 *
 * @package GatherPress
 * @subpackage Tests
 * @since 1.0.0
 */

namespace GatherPress\Tests\Core;

use PMC\Unit_Test\Base;
use GatherPress\Core\Attendee;

/**
 * Class Test_Attendee.
 *
 * @coversDefaultClass \GatherPress\Core\Attendee
 */
class Test_Attendee extends Base {

	/**
	 * Coverage for get_attendee method.
	 *
	 * @covers ::get_attendee
	 */
	public function test_get_attendee() {
		$post     = $this->mock->post(
			array(
				'post_type' => 'gp_event',
			)
		)->get();
		$attendee = new Attendee( $post->ID );
		$user     = $this->mock->user()->get();
		$status   = 'attending';

		$this->assertEmpty( $attendee->get_attendee( 0 ) );
		$this->assertEmpty( $attendee->get_attendee( $user->ID ) );

		$attendee->save_attendee( $user->ID, $status );

		$data = $attendee->get_attendee( $user->ID );

		$this->assertSame( $post->ID, intval( $data['post_id'] ) );
		$this->assertSame( $user->ID, intval( $data['user_id'] ) );
		$this->assertSame( $status, $data['status'] );
		$this->assertInternalType( 'int', strtotime( $data['timestamp'] ) );
		$this->assertNotEmpty( $data['id'] );
	}

	/**
	 * Coverage for save_attendee method.
	 *
	 * @covers ::save_attendee
	 */
	public function test_save_attendee() {
		$post     = $this->mock->post(
			array(
				'post_type' => 'gp_event',
			)
		)->get();
		$attendee = new Attendee( $post->ID );
		$user     = $this->mock->user()->get();
		$status   = 'attending';

		$this->assertSame( $status, $attendee->save_attendee( $user->ID, $status ) );

		$status = 'not_attending';

		$this->assertSame( $status, $attendee->save_attendee( $user->ID, $status ) );

		$this->assertEmpty( $attendee->save_attendee( 0, $status ) );

		$status = 'unittest';

		$this->assertEmpty( $attendee->save_attendee( $user->ID, $status ) );
	}

}
