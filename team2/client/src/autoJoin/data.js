//https://api.zoom.us/v2/users/{user_id}/meetingsで取った場合
{
    "page_size": 30,
    "total_records": 4,
    "next_page_token": "",
    "meetings": [
        {
            "uuid": "Sq7ou6NbRzyDCVsWldCLDw==",
            "id": 74222833673,
            "host_id": "Ub4WufPTS8muOiusO4dCyA",
            "topic": "Zoom meeting invitation - calu gonのZoomミーティング",
            "type": 2,
            "start_time": "2021-02-05T05:30:00Z",
            "duration": 30,
            "timezone": "Asia/Tokyo",
            "created_at": "2021-02-05T05:39:45Z",
            "join_url": "https://us04web.zoom.us/j/74222833673?pwd=b3JnZnJpS0VLZ29GMUEra3owcjZRZz09"
        },
        {
            "uuid": "MuiacvZpS7yLzM1VYfziGw==",
            "id": 78708310929,
            "host_id": "Ub4WufPTS8muOiusO4dCyA",
            "topic": "team2",
            "type": 2,
            "start_time": "2021-02-05T06:00:00Z",
            "duration": 30,
            "timezone": "Asia/Tokyo",
            "created_at": "2021-02-05T05:53:44Z",
            "join_url": "https://us04web.zoom.us/j/78708310929?pwd=QzNHK2ZiZWd2ZjUzbnZldmJBdW9xUT09"
        },
        {
            "uuid": "1wq806nBTfiR3ZvaUuEM7g==",
            "id": 71437131723,
            "host_id": "Ub4WufPTS8muOiusO4dCyA",
            "topic": "Zoom meeting invitation - calu gonのZoomミーティング",
            "type": 2,
            "start_time": "2021-02-07T13:15:00Z",
            "duration": 45,
            "timezone": "Asia/Tokyo",
            "created_at": "2021-02-07T13:12:52Z",
            "join_url": "https://us04web.zoom.us/j/71437131723?pwd=Z1JwcTdZUm5lazQvWHI0enFGR0lNZz09"
        },
        {
            "uuid": "JRgiD5EMRy2H6zkI7oIAFw==",
            "id": 79036881328,
            "host_id": "Ub4WufPTS8muOiusO4dCyA",
            "topic": "Zoom meeting invitation - calu gonのZoomミーティング",
            "type": 2,
            "start_time": "2021-02-08T09:00:00Z",
            "duration": 30,
            "timezone": "Asia/Tokyo",
            "created_at": "2021-02-08T08:30:11Z",
            "join_url": "https://us04web.zoom.us/j/79036881328?pwd=OUVqcGRlb3k2WVdwUFJZZ1NSR0F2QT09"
        }
    ]
}

//https://api.zoom.us/v2/meetings/{meeting_id}で取った場合

{
    "uuid": "JRgiD5EMRy2H6zkI7oIAFw==",
    "id": 79036881328,
    "host_id": "Ub4WufPTS8muOiusO4dCyA",
    "host_email": "mail_address",
    "assistant_id": "",
    "topic": "Zoom meeting invitation - calu gonのZoomミーティング",
    "type": 2,
    "status": "waiting",
    "start_time": "2021-02-08T09:00:00Z",
    "duration": 30,
    "timezone": "Asia/Tokyo",
    "agenda": "",
    "created_at": "2021-02-08T08:30:11Z",
    "start_url": "https://us04web.zoom.us/s/79036881328?zak=eyJ6bV9za20iOiJ6bV9vMm0iLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGllbnQiLCJ1aWQiOiJVYjRXdWZQVFM4bXVPaXVzTzRkQ3lBIiwiaXNzIjoid2ViIiwic3R5IjoxLCJ3Y2QiOiJ1czA0IiwiY2x0IjowLCJzdGsiOiI0a2lqNkNYVWxmenM3VGc3NUFJQU1lZjhDbjBPMXhDYUQxOVdsUy1Jelk0LkFHLkE4MUhhdFVFM25GUngxUTlKNVJKNlFRU1c5NmVTS2lmZUVQYktpdDRwSHJiOFF5aF9mNkVUVnpfazhtQnhCLXNpYjBkNHVrdFdpRnd0eW12Lk1FdUl5RGczR2NjZ29MYjJfSlVEZXcuUXl5bTVodUxsbEVzWVRGbSIsImV4cCI6MTYxMjc4MTQ0MCwiaWF0IjoxNjEyNzc0MjQwLCJhaWQiOiJiV3dvZzF1bVRHTzhlQk5FMVA4YU9BIiwiY2lkIjoiIn0.WQpp-TsPebWA0M6IcXYTWPCxl07QMxD98p_yVKqkg44",
    "join_url": "https://us04web.zoom.us/j/79036881328?pwd=OUVqcGRlb3k2WVdwUFJZZ1NSR0F2QT09",
    "password": "ZS4ffB",
    "h323_password": "680439",
    "pstn_password": "680439",
    "encrypted_password": "OUVqcGRlb3k2WVdwUFJZZ1NSR0F2QT09",
    "settings": {
        "host_video": false,
        "participant_video": false,
        "cn_meeting": false,
        "in_meeting": false,
        "join_before_host": false,
        "jbh_time": 0,
        "mute_upon_entry": false,
        "watermark": false,
        "use_pmi": false,
        "approval_type": 2,
        "audio": "voip",
        "auto_recording": "none",
        "enforce_login": false,
        "enforce_login_domains": "",
        "alternative_hosts": "",
        "close_registration": false,
        "show_share_button": false,
        "allow_multiple_devices": false,
        "registrants_confirmation_email": true,
        "waiting_room": true,
        "request_permission_to_unmute_participants": false,
        "registrants_email_notification": true,
        "meeting_authentication": false,
        "encryption_type": "enhanced_encryption",
        "approved_or_denied_countries_or_regions": {
            "enable": false
        },
        "breakout_room": {
            "enable": false
        }
    }
}