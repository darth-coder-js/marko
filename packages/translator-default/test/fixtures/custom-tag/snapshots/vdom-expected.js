import { t as _t } from "marko/src/runtime/vdom";

const _marko_componentType = "packages/translator-default/test/fixtures/custom-tag/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _testHello from "./tags/test-hello/renderer.js";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  _marko_tag(_testHello, {
    "name": "World"
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);