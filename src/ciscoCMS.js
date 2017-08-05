var xml2js = require("xml2js");
var http = require("http");
var https =require("https");

module.exports = function ciscoCMS() {

    this.path = {
        accessQuery: "/accessQuery",
        callBrandingProfiles: "/callBrandingProfiles",
        callBrandingProfiles: "/callBrandingProfiles/<call branding profile id>",
        callBridges: "/callBridges",
        callBridges: "/callBridges/<call bridge id>",
        callBridges: "/callBridgeGroups",
        callBridges: "/callBridgeGroups/<call bridge group id>",
        calls: "/calls",
        calls: "/calls/<call id>",
        calls: "/calls/<call id>/callLegs",
        calls: "/calls/<call id>/diagnostics",
        calls: "/calls/<call id>/participants",
        calls: "/calls/<call id>/participants/*",
        callProfiles: "/callProfiles",
        callProfiles: "/callProfiles/<call profile id>",
        callLegs: "/callLegs",
        callLegs: "/callLegs/<callLeg id>",
        callLegs: "/callLegs/<callLeg id>/callLegProfileTrace/callLegProfiles",
        callLegProfiles: "/callLegProfiles/<call leg profile id>",
        callLegProfiles: "/callLegProfiles/<call leg profile id>/usage",
        compatibilityProfiles: "/compatibilityProfiles",
        compatibilityProfiles: "/compatibilityProfiles/<compatibility profile id>",
        coSpaceBulkParameterSets: "/coSpaceBulkParameterSets",
        coSpaceBulkParameterSets: "/coSpaceBulkParameterSets/<coSpace bulk parameter set id>",
        coSpaceBulkSyncs: "/coSpaceBulkSyncs",
        coSpaceBulkSyncs: "/coSpaceBulkSyncs/<coSpace bulk sync id>",
        coSpaces: "/coSpaces",
        coSpaces: "/coSpaces/<coSpace id>",
        coSpaces: "/coSpaces/<coSpace id>/accessMethods",
        coSpaces: "/coSpaces/<coSpace id>/accessMethods/<access method id>",
        coSpaces: "/coSpaces/<coSpace id>/coSpaceUsers",
        coSpaces: "/coSpaces/<coSpace id>/coSpaceUsers/<coSpaceUser id>",
        coSpaces: "/coSpaces/<coSpace id>/diagnostics",
        coSpaces: "/coSpaces/<coSpace id>/messages",
        dialTransforms: "/dialTransforms",
        dialTransforms: "/dialTransforms/<dial transform id>",
        directorySearchLocations: "/directorySearchLocations",
        directorySearchLocations: "/directorySearchLocations/<directory search location id>",
        dtmfProfiles: "/dtmfProfiles",
        dtmfProfiles: "/dtmfProfiles/<dtmf profile id>",
        forwardingDialPlanRules: "/forwardingDialPlanRules",
        forwardingDialPlanRules: "/forwardingDialPlanRules/<forwarding dial plan rule id>",
        inboundDialPlanRules: "/inboundDialPlanRules",
        inboundDialPlanRules: "/inboundDialPlanRules/<inbound dial plan rule id>",
        ivrs: "/ivrs",
        ivrs: "/ivrs/<ivr id>",
        ivrBrandingProfiles: "/ivrBrandingProfiles",
        ivrBrandingProfiles: "/ivrBrandingProfiles/<ivr branding profile id>",
        ldapMappings: "/ldapMappings",
        ldapMappings: "/ldapMappings/<ldap mapping id>",
        ldapServers: "/ldapServers",
        ldapServers: "/ldapServers/<ldap server id>",
        ldapSources: "/ldapSources",
        ldapSources: "/ldapSources/<ldap source id>",
        ldapSyncs: "/ldapSyncs",
        ldapSyncs: "/ldapSyncs/<ldap sync id>",
        outboundDialPlanRules: "/outboundDialPlanRules",
        outboundDialPlanRules: "/outboundDialPlanRules/<outbound dial plan rule id>",
        participants: "/participants",
        participants: "/participants/<participantId>",
        participants: "/participants/<participantId>/callLegs",
        recorders: "/recorders",
        recorders: "/recorders/<recorder id>",
        recorders: "/recorders/<recorder id>/status",
        streamers: "/streamers",
        streamers: "/streamers/<streamer id>",
        streamers: "/streamers/<streamer id>/status",
        system: "/system/alarms",
        system: "/system/cdrReceivers",
        system: "/system/cdrReceivers/<CDR receiver id>",
        system: "/system/configuration/cluster",
        system: "/system/configuration/xmpp",
        system: "/system/database",
        system: "/system/diagnostics",
        system: "/system/diagnostics/<diagnostics id>",
        system: "/system/diagnostics/<diagnostics id>/contents",
        system: "/system/licensing",
        system: "/system/multipartyLicensing",
        system: "/system/multipartyLicensing/activePersonalLicenses",
        system: "/system/load",
        system: "/system/profiles",
        system: "/system/status",
        tenantGroups: "/tenantGroups",
        tenantGroups: "/tenantGroups/<tenant group id>",
        tenants: "/tenants",
        tenants: "/tenants/<tenant id>",
        turnServers: "/turnServers",
        turnServers: "/turnServers/<turn server id>",
        turnServers: "/turnServers/<turn server id>/status",
        users: "/users",
        users: "/users/<user id>",
        users: "/users/<user id>/usercoSpaces",
        users: "/userProfiles",
        users: "/userProfiles/<user profile id>",
        webBridges: "/webBridges",
        webBridges: "/webBridges/<web bridge id>",
        webBridges: "/webBridges/<web bridge id>/status",
        webBridges: "/webBridges/<web bridge id>/updateCustomization"
    }
    this.test =function(){
        console.log(this.path.callBrandingProfiles);
    }
}