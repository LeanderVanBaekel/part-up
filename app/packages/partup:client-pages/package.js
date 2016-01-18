Package.describe({
    name: 'partup:client-pages',
    version: '0.0.1',
    summary: 'All pages',
    documentation: null
});

Package.onUse(function(api) {
    api.use([
        'tap:i18n',
        'meteorhacks:subs-manager'
    ], ['client', 'server']);

    api.use([
        'templating',
        'partup:lib',
        'reactive-dict',
        'reactive-var',
        'aldeed:autoform',
        'yogiben:autoform-tags',
        'http',
    ], 'client');

    var clientFiles = [
        'package-tap.i18n',

        // App
        'app/app.html',
        'app/app.js',

        //no connection
        'modal/no_connection/no_connection.html',
        'modal/no_connection/no_connection.js',

        'app/app-notfound.html',
        'app/app-notfound.js',
        // App:home
        'app/home/home.html',
        'app/home/home.js',
        'app/home/partials/featured-networks.html',
        'app/home/partials/featured-networks.js',
        'app/home/partials/philosophy.html',
        'app/home/partials/philosophy.js',
        'app/home/partials/call-to-action.html',
        'app/home/partials/call-to-action.js',

        // App:discover
        'app/discover/discover.html',
        'app/discover/discover.js',
        'app/discover/partials/discover-filter.html',
        'app/discover/partials/discover-filter.js',
        'app/discover/partials/discover-page.html',
        'app/discover/partials/discover-page.js',
        'app/discover/partials/tile/tile.html',
        'app/discover/partials/tile/tile.js',
        'app/discover/partials/tile/featured.html',
        'app/discover/partials/tile/featured.js',

        // App:network
        'app/network/network.html',
        'app/network/network.js',

        // App: network tabs
        'app/network/network-partups.html',
        'app/network/network-partups.js',
        'app/network/network-uppers.html',
        'app/network/network-uppers.js',
        'app/network/network-closed.html',
        'app/network/network-closed.js',

        // App:profile
        'app/profile/profile.html',
        'app/profile/profile.js',

        // App: profile tabs
        'app/profile/tabs/profile-upper-partups.html',
        'app/profile/tabs/profile-upper-partups.js',
        'app/profile/tabs/profile-supporter-partups.html',
        'app/profile/tabs/profile-supporter-partups.js',
        'app/profile/tabs/profile-about.html',
        'app/profile/tabs/profile-about.js',

        // App: profile partials
        'app/profile/partials/profile-tile.html',
        'app/profile/partials/profile-tile.js',
        'app/profile/partials/media-tile.html',
        'app/profile/partials/media-tile.js',
        'app/profile/partials/result-tile.html',
        'app/profile/partials/result-tile.js',
        'app/profile/partials/placeholder-tile.html',
        'app/profile/partials/placeholder-tile.js',

        // App: profile popups
        'app/profile/partials/new-photo-tile.html',
        'app/profile/partials/new-photo-tile.js',
        'app/profile/partials/new-video-tile.html',
        'app/profile/partials/new-video-tile.js',
        'app/profile/partials/info-popup.html',
        'app/profile/partials/info-popup.js',

        // App: profile settings modal
        'modal/profile_settings/profile_settings.html',
        'modal/profile_settings/profile_settings.js',
        'modal/profile_settings/details/details.html',
        'modal/profile_settings/details/details.js',
        'modal/profile_settings/account/account.html',
        'modal/profile_settings/account/account.js',
        'modal/profile_settings/email/email.html',
        'modal/profile_settings/email/email.js',
        'modal/profile_settings/email/unsubscribe_all.html',
        'modal/profile_settings/email/unsubscribe_all.js',
        'modal/profile_settings/email/unsubscribe_one.html',
        'modal/profile_settings/email/unsubscribe_one.js',

        // App:partup:takepart (popup)
        'app/partup/takepart/takepart.html',
        'app/partup/takepart/takepart.js',

        // App:partup:gallery (update)
        'app/partup/gallery/gallery.html',
        'app/partup/gallery/gallery.js',

        // App:partup:updates
        'app/partup/updates/updates.html',
        'app/partup/updates/updates.js',
        'app/partup/updates/newmessage/newmessage.html',
        'app/partup/updates/newmessage/newmessage.js',
        'app/partup/update/update.html',
        'app/partup/update/update.js',

        // App:partup:activities
        'app/partup/activities/activities.html',
        'app/partup/activities/activities.js',
        'app/partup/activities/activity/activity.html',
        'app/partup/activities/activity/activity.js',
        'app/partup/activities/activity/form/placeholders.js',
        'app/partup/activities/activity/form/form.html',
        'app/partup/activities/activity/form/form.js',
        'app/partup/activities/activity/view/view.html',
        'app/partup/activities/activity/view/view.js',
        'app/partup/activities/newactivity-restricted/newactivity-restricted.html',
        'app/partup/activities/newactivity-restricted/newactivity-restricted.js',

        // App:partup
        'app/partup/partup.html',
        'app/partup/partup.js',
        'app/partup/partup-navigation.html',
        'app/partup/partup-navigation.js',
        'app/partup/partup-sidebar.html',
        'app/partup/partup-sidebar.js',

        // app content pages
        'app/content_pages/about/about.html',
        'app/content_pages/about/about.js',
        'app/content_pages/pricing/pricing.html',
        'app/content_pages/pricing/pricing.js',
        'app/content_pages/pricing/partials/product.html',
        'app/content_pages/pricing/partials/product.js',

        // Modal
        'modal/modal.html',
        'modal/modal.js',

        // Modal:login
        'modal/login/login.html',
        'modal/login/login.js',

        // Modal:register
        'modal/register/register.html',
        'modal/register/register.js',
        'modal/register/signup/signup.html',
        'modal/register/signup/signup.js',
        'modal/register/details/details.html',
        'modal/register/details/details.js',

        // Modal:forgot/resetpasword
        'modal/forgotpassword/forgotpassword.html',
        'modal/forgotpassword/forgotpassword.js',
        'modal/forgotpassword/form/form.html',
        'modal/forgotpassword/form/form.js',

        'modal/resetpassword/resetpassword.html',
        'modal/resetpassword/resetpassword.js',

        // Modal:partup_settings
        'modal/partup_settings/partup_settings.html',
        'modal/partup_settings/partup_settings.js',

        // Modal:invite_to_activity
        'modal/invite_to_activity/invite_to_activity.html',
        'modal/invite_to_activity/invite_to_activity.js',

        // Modal:invite_to_activity
        'modal/invite_to_partup/invite_to_partup.html',
        'modal/invite_to_partup/invite_to_partup.js',

        // Modal:network
        'modal/network/network-invite.html',
        'modal/network/network-invite.js',

        // Modal:admin
        'modal/admin/admin.html',
        'modal/admin/admin.js',
        'modal/admin/overview/overview.html',
        'modal/admin/featured_partups/featured_partups.html',
        'modal/admin/featured_networks/featured_networks.html',
        'modal/admin/createtribe/createtribe.html',

        // Modal:network_settings
        'modal/network_settings/network_settings.html',
        'modal/network_settings/network_settings.js',
        'modal/network_settings/details/details.html',
        'modal/network_settings/requests/requests.html',
        'modal/network_settings/uppers/uppers.html',
        'modal/network_settings/bulkinvite/bulkinvite.html',

        // Modal:create_intro
        'modal/create_intro/create_intro.html',
        'modal/create_intro/create_intro.js',

        // Modal:create
        'modal/create/create.html',
        'modal/create/create.js',

        // Modal:create:details
        'modal/create/details/details.html',
        'modal/create/details/details.js',

        // Modal:create:activities
        'modal/create/activities/activities.html',
        'modal/create/activities/activities.js',
        'modal/create/activities/copy/copy.html',
        'modal/create/activities/copy/copy.js',

        // Modal:create:promote
        'modal/create/promote/promote.html',
        'modal/create/promote/promote.js',

        'mobile/mobile.html',
        'mobile/mobile.js',
        'mobile/notifications/notifications.html',
        'mobile/notifications/notifications.js'
    ];

    var languageFiles = [
        'i18n/app/error/notfound.en.i18n.json',
        'i18n/app/error/notfound.nl.i18n.json',

        'i18n/app/home/en.i18n.json',
        'i18n/app/home/nl.i18n.json',

        'i18n/app/about/en.i18n.json',
        'i18n/app/about/nl.i18n.json',

        'i18n/app/pricing/en.i18n.json',
        'i18n/app/pricing/nl.i18n.json',

        'i18n/app/discover/en.i18n.json',
        'i18n/app/discover/nl.i18n.json',
        'i18n/app/discover/partials/en.i18n.json',
        'i18n/app/discover/partials/nl.i18n.json',

        'i18n/app/network/en.i18n.json',
        'i18n/app/network/nl.i18n.json',

        'i18n/app/partup/en.i18n.json',
        'i18n/app/partup/nl.i18n.json',
        'i18n/app/partup/takepart/en.i18n.json',
        'i18n/app/partup/takepart/nl.i18n.json',
        'i18n/app/partup/updates/en.i18n.json',
        'i18n/app/partup/updates/nl.i18n.json',
        'i18n/app/partup/updates/newmessage/en.i18n.json',
        'i18n/app/partup/updates/newmessage/nl.i18n.json',
        'i18n/app/partup/updates/update/en.i18n.json',
        'i18n/app/partup/updates/update/nl.i18n.json',

        'i18n/app/partup/activities/en.i18n.json',
        'i18n/app/partup/activities/nl.i18n.json',
        'i18n/app/partup/activities/activity/en.i18n.json',
        'i18n/app/partup/activities/activity/nl.i18n.json',

        'i18n/app/profile/en.i18n.json',
        'i18n/app/profile/nl.i18n.json',

        'i18n/modal/login/en.i18n.json',
        'i18n/modal/login/nl.i18n.json',
        'i18n/modal/register/signup/en.i18n.json',
        'i18n/modal/register/signup/nl.i18n.json',
        'i18n/modal/register/details/en.i18n.json',
        'i18n/modal/register/details/nl.i18n.json',

        'i18n/modal/forgotpassword/en.i18n.json',
        'i18n/modal/forgotpassword/nl.i18n.json',
        'i18n/modal/forgotpassword/form/en.i18n.json',
        'i18n/modal/forgotpassword/form/nl.i18n.json',

        'i18n/modal/resetpassword/en.i18n.json',
        'i18n/modal/resetpassword/nl.i18n.json',

        'i18n/modal/invite/activity/en.i18n.json',
        'i18n/modal/invite/activity/nl.i18n.json',
        'i18n/modal/invite/partup/en.i18n.json',
        'i18n/modal/invite/partup/nl.i18n.json',
        'i18n/modal/invite/network/en.i18n.json',
        'i18n/modal/invite/network/nl.i18n.json',

        'i18n/modal/settings/partup/edit/en.i18n.json',
        'i18n/modal/settings/partup/edit/nl.i18n.json',

        'i18n/modal/settings/partup/create/en.i18n.json',
        'i18n/modal/settings/partup/create/nl.i18n.json',

        'i18n/modal/settings/partup/create/intro/en.i18n.json',
        'i18n/modal/settings/partup/create/intro/nl.i18n.json',

        'i18n/modal/settings/partup/create/details/en.i18n.json',
        'i18n/modal/settings/partup/create/details/nl.i18n.json',
        'i18n/modal/settings/partup/create/activities/en.i18n.json',
        'i18n/modal/settings/partup/create/activities/nl.i18n.json',
        'i18n/modal/settings/partup/create/promote/en.i18n.json',
        'i18n/modal/settings/partup/create/promote/nl.i18n.json',

        'i18n/modal/settings/network/en.i18n.json',
        'i18n/modal/settings/network/nl.i18n.json',

        'i18n/modal/settings/profile/en.i18n.json',
        'i18n/modal/settings/profile/nl.i18n.json',

        'i18n/modal/settings/admin/en.i18n.json',
        'i18n/modal/settings/admin/nl.i18n.json'
    ];

    api.addFiles(clientFiles.concat(languageFiles), 'client');

    var serverFiles = [
        'package-tap.i18n'
    ];

    api.addFiles(serverFiles.concat(languageFiles), 'server');
});
