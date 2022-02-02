@component('mail::message')
# Change Password Requefa-stack
Click On the Button Bellow to change password

The body of your message.

@component('mail::button', ['url' => 'http://localhost:4200/response-password-reste?token=',$token])
ResetPassword
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
