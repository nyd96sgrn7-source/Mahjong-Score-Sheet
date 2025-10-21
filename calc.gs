// 登録画面から情報を取得し、順位通りのリスト(["名前","成績"])を返す
function get_name_and_score() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('当日成績');
  const rank_uma = [50, 10, -10, -50]; // 順位ウマ
  
  let registration_list = sheet.getRange('A3:C6').getValues();

  // 点数と順位からリストの並び替え
  let registration_list_sorted = registration_list.sort((a, b) => b[1] - a[1] || a[2] - b[2]);

  // 順位から成績を計算し、順位を除く
  let result_list = registration_list_sorted.map(
    (item, index) => [item[0], (item[1] - 30000)/1000 + rank_uma[index]]
  );

  return result_list
}
