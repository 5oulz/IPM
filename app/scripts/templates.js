this["myApp"] = this["myApp"] || {};
this["myApp"]["templates"] = this["myApp"]["templates"] || {};

this["myApp"]["templates"]["eventsMain"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li data-event=\""
    + alias4(((helper = (helper = helpers.meta || (depth0 != null ? depth0.meta : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"meta","hash":{},"data":data}) : helper)))
    + "\" class=\"event-item\">\n                <p class=\"event-item-name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n                <p class=\"event-item-date\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p>\n            </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <aside data-event=\""
    + alias4(((helper = (helper = helpers.meta || (depth0 != null ? depth0.meta : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"meta","hash":{},"data":data}) : helper)))
    + "\" class=\"event-description\">\n            <p class=\"event-time\">"
    + alias4(((helper = (helper = helpers.startTime || (depth0 != null ? depth0.startTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startTime","hash":{},"data":data}) : helper)))
    + "</p>\n            <p class=\"event-local\">"
    + alias4(((helper = (helper = helpers.local || (depth0 != null ? depth0.local : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"local","hash":{},"data":data}) : helper)))
    + "</p>\n            <button class=\"event-confirm icon-ok\"></button>\n        </aside>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"nfc-block\" data-event=\""
    + alias4(((helper = (helper = helpers.meta || (depth0 != null ? depth0.meta : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"meta","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n            <div class=\"date\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\n            <div class=\"startTime\">"
    + alias4(((helper = (helper = helpers.startTime || (depth0 != null ? depth0.startTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startTime","hash":{},"data":data}) : helper)))
    + "</div>\n            <p class=\"instructions\">Please approach your device from the NFC reader to enter your event</p>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"events-main\" class=\"functionality-screen event-screen\">\n    <section class=\"nav-fn\"></section>\n    <section class=\"event-screen selection active\">\n        <ul class=\"event-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </section>\n    <section class=\"event-screen nfc-use\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </section>\n    <section class=\"event-screen success\">\n        <div class=\"circle confirm icon-ok\"></div>\n        <h2>Success!</h2>\n        <p>enjoy your event</p>\n        <button class=\"close-event-error\">Close</button>\n    </section>\n    <section class=\"event-screen error\">\n        <div class=\"circle error icon-cancel\"></div>\n        <h2>Error!</h2>\n        <p>There was an error processing your request</p>\n        <button class=\"close-event-error\">Close</button>\n    </section>\n</section>";
},"useData":true});

this["myApp"]["templates"]["lockscreen"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"lock-screen\" class=\"lock-screen unlocked\">"
    + container.escapeExpression(((helper = (helper = helpers.test || (depth0 != null ? depth0.test : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"test","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});

this["myApp"]["templates"]["msoption"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-msoption=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.cssclass || (depth0 != null ? depth0.cssclass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cssclass","hash":{},"data":data}) : helper)))
    + " ms-option\"><p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p></div>";
},"useData":true});

this["myApp"]["templates"]["navFnBar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button class=\"back icon-undo\"></button>\n<button class=\"help icon-help\"></button>";
},"useData":true});

this["myApp"]["templates"]["test"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"testsaaa\">hello</div>fsafasd";
},"useData":true});