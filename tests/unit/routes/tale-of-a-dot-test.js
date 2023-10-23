import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tale-of-a-dot', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tale-of-a-dot');
    assert.ok(route);
  });
});
