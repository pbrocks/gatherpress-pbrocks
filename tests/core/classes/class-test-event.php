<?php
/**
 * Class handles unit tests for GatherPress\Core\Event.
 *
 * @package GatherPress
 * @subpackage Core
 * @since 1.0.0
 */

namespace GatherPress\Tests\Core;

use PMC\Unit_Test\Base;
use GatherPress\Core\Event;

/**
 * Class Test_Event.
 *
 * @coversDefaultClass \GatherPress\Core\Event
 */
class Test_Event extends Base {

	/**
	 * Coverage for get_calendar_links method.
	 *
	 * @covers ::get_calendar_links
	 * @covers ::get_google_calendar_link
	 * @covers ::get_ics_calendar_download
	 * @covers ::get_yahoo_calendar_link
	 */
	public function test_get_calendar_links() {
		$post   = $this->mock->post(
			array(
				'post_title'   => 'Unit Test Event',
				'post_type'    => 'gp_event',
				'post_content' => 'Unit Test description.',
			)
		)->get();
		$event  = new Event( $post->ID );
		$params = array(
			'post_id'        => $post->ID,
			'datetime_start' => '2020-05-11 15:00:00',
			'datetime_end'   => '2020-05-11 17:00:00',
		);

		Event::save_datetimes( $params );

		$output  = $event->get_calendar_links();
		$expects = array(
			'google' => 'https://www.google.com/calendar/render/?action=TEMPLATE&text=Unit Test Event&dates=20200511T150000Z/20200511T170000Z&details=Unit Test description.&location&sprop=name:',
			'isc'    => 'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:' . home_url( '/' ) . '?gp_event=unit-test-event%0ADTSTART:20200511T150000Z%0ADTEND:20200511T170000Z%0ASUMMARY:Unit Test Event%0ADESCRIPTION:Unit Test description.%0ALOCATION:%0AEND:VEVENT%0AEND:VCALENDAR',
			'yahoo'  => 'https://calendar.yahoo.com/?v=60&view=d&type=20&title=Unit Test Event&st=20200511T150000Z&dur=0200&desc=Unit Test description.&in_loc',
		);

		$this->assertSame( $expects, $output );
	}

	/**
	 * Cover for has_event_past method.
	 *
	 * @covers ::has_event_past
	 */
	public function test_has_event_past() {
		$post   = $this->mock->post(
			array(
				'post_type' => 'gp_event',
			)
		)->get();
		$event  = new Event( $post->ID );
		$year   = gmdate( 'Y' );
		$params = array(
			'post_id'        => $post->ID,
			'datetime_start' => sprintf( '%d-05-11 15:00:00', $year - 1 ),
			'datetime_end'   => sprintf( '%d-05-11 17:00:00', $year - 1 ),
		);

		Event::save_datetimes( $params );

		$output = $event->has_event_past();

		$this->assertTrue( $output );

		$params = array(
			'post_id'        => $post->ID,
			'datetime_start' => sprintf( '%d-05-11 15:00:00', $year + 1 ),
			'datetime_end'   => sprintf( '%d-05-11 17:00:00', $year + 1 ),
		);

		Event::save_datetimes( $params );

		$output = $event->has_event_past();

		$this->assertFalse( $output );
	}

	/**
	 * Coverage for adjust_event_sql method.
	 *
	 * @covers ::adjust_event_sql
	 */
	public function test_adjust_sql() {
		global $wpdb;

		$table  = sprintf( Event::TABLE_FORMAT, $wpdb->prefix, Event::POST_TYPE );
		$retval = Event::adjust_sql( array(), 'all', 'DESC' );

		$this->assertContains( 'DESC', $retval['orderby'] );
		$this->assertEmpty( $retval['where'] );

		$retval = Event::adjust_sql( array(), 'past', 'desc' );

		$this->assertContains( 'DESC', $retval['orderby'] );
		$this->assertContains( "AND {$table}.datetime_end_gmt <", $retval['where'] );

		$retval = Event::adjust_sql( array(), 'upcoming', 'ASC' );

		$this->assertContains( 'ASC', $retval['orderby'] );
		$this->assertContains( "AND {$table}.datetime_end_gmt >=", $retval['where'] );
	}
}