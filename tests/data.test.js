import test from 'node:test';
import assert from 'node:assert/strict';
import { Q, keyIds, badges, reports, slides } from '../src/data.js';

test('所有九道選擇題都有三個選項與逐項回饋', () => {
  assert.equal(Object.keys(Q).length, 9);
  for (const [id, q] of Object.entries(Q)) {
    assert.equal(q.options.length, 3, `${id} options`);
    assert.equal(q.f.length, 3, `${id} feedback`);
    assert.ok(Number.isInteger(q.a) && q.a >= 0 && q.a < 3, `${id} answer index`);
    assert.ok(q.options[q.a], `${id} suggested answer exists`);
  }
});

test('五把鑰匙各有說明、解鎖文字與徽章名稱', () => {
  assert.equal(keyIds.length, 5);
  for (const id of keyIds) {
    assert.ok(Q[id].info);
    assert.ok(Q[id].unlock);
    assert.ok(Q[id].badge);
  }
});

test('任務獎章、報告版本與四頁簡報資料齊全', () => {
  assert.equal(badges.length, 9);
  assert.deepEqual(Object.keys(reports).sort(), ['ace', 'potential', 'steady']);
  assert.equal(slides.length, 4);
  assert.ok(slides.every(([title, body]) => title && body));
});

test('回饋文案不包含羞辱性字詞', () => {
  const prohibited = ['你答錯了', '你不會', '失敗者', '太笨了', '重新學習吧'];
  const feedback = Object.values(Q).flatMap(q => q.f).join('');
  for (const phrase of prohibited) assert.equal(feedback.includes(phrase), false, phrase);
});
import { recordAnswer, awardOnce } from '../src/state.js';

test('首次作答依建議答案取得 100 或 70 XP，修改答案不重複加分', () => {
  const answers = {};
  assert.equal(recordAnswer(answers, 'q1', 2, 1).points, 70);
  assert.equal(recordAnswer(answers, 'q1', 1, 1).points, 70);
  assert.equal(answers.q1.choice, 1);
  const rightFirst = {};
  assert.equal(recordAnswer(rightFirst, 'k1', 0, 0).points, 100);
  assert.equal(recordAnswer(rightFirst, 'k1', 2, 0).points, 100);
});

test('徽章重複觸發只保留一枚', () => {
  const earned = [];
  awardOnce(earned, '情報接收官');
  awardOnce(earned, '情報接收官');
  assert.deepEqual(earned, ['情報接收官']);
});
