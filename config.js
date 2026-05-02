const CONFIG = {
  VERSION: '1.6',
  CLOSING_TEXT: '甘い言葉より、本当の答えを。🖤',
  BASE_URL_UME: 'https://example.com/ume',   // 梅プラン ¥3,000 のBASE URLに変更
  BASE_URL_MATSU: 'https://example.com/matsu', // 松プランのBASE URLに変更

  UPSELL: {
    '前進・出発系': {
      text: 'このタイミングを逃さないために、転職タイミングカレンダーで最適な日を知る方法があります（松プラン）',
      plan: 'matsu'
    },
    '不安・迷い系': {
      text: 'このカードが出たとき、何が足を引っ張っているかをケルト十字で特定できます',
      plan: 'ume'
    },
    '転換・決断系': {
      text: 'このカードは転換点。ケルト十字でその後どうなるかまで読めます',
      plan: 'ume'
    },
    '力・実力系': {
      text: 'あなたの強みをさらに具体的な職種・職場タイプで読み解けます',
      plan: 'ume'
    },
    '内省・待機系': {
      text: '今は動くべきかどうか、ケルト十字でもっと正確に判断できます',
      plan: 'ume'
    },
    'その他': {
      text: '1枚では見えない部分を、ケルト十字でより深く読めます',
      plan: 'ume'
    }
  }
};
