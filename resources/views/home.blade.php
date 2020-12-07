<!DOCTYPE html>
<html lang="en" dir="rtl">
<head>
    <link href="/css/app.css" rel="stylesheet">
    <title>فروشگاه فایل</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>
        window.csrf = '{{csrf_token()}}'
    </script>
</head>

<body>
<div id="app">
    <router-view></router-view>
</div>

<script src="/js/app.js"></script>
</body>

</html>
