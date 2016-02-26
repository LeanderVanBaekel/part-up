// jscs:disable
/**
 * Render a widget to view/edit a single network's uppers
 *
 * @module client-network-settings-uppers
 * @param {Number} networkSlug    the slug of the network whose uppers are rendered
 */
// jscs:enable

var Subs = new SubsManager({
    cacheLimit: 1,
    expireIn: 10
});

Template.NetworkSettingsUppers.onCreated(function() {
    var tpl = this;
    var userId = Meteor.userId();

    var network_sub = Subs.subscribe('networks.one', tpl.data.networkSlug);
    Subs.subscribe('networks.one.uppers', {
        slug: tpl.data.networkSlug
    });

    tpl.autorun(function(computation) {
        if (network_sub.ready()) {
            computation.stop();
            var network = Networks.findOne({slug: tpl.data.networkSlug});
            if (!network) Router.pageNotFound('network');
            if (network.isClosedForUpper(userId)) Router.pageNotFound('network');
        }
    });
});

Template.NetworkSettingsUppers.helpers({
    network: function() {
        return Networks.findOne({slug: this.networkSlug});
    },
    upper: function() {
        var upperId = this.toString();
        return Meteor.users.findOne(upperId);
    }
});

Template.NetworkSettingsUppers.events({
    'click [data-upper-remove]': function(e, template) {
        var btn = $(e.target).closest('[data-upper-remove]');
        var upperId = btn.data('upper-remove');
        var network = Networks.findOne({slug: template.data.networkSlug});

        Meteor.call('networks.remove_upper', network._id, upperId, function(err) {
            if (err && err.reason) {
                Partup.client.notify.error(err.reason);
                return;
            }

            Partup.client.notify.success(TAPi18n.__('network-settings-uppers-upper-removed'));
        });
    }
});
