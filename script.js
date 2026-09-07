// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
// Text/Instructions
this.options.items.push({
          "type": "text",
          "title": "性格特性・思考スタイル・超常現象信奉に関する調査",
           "content": "この度は、お忙しいところ調査にご協力いただき、誠にありがとうございます。<br><br> この調査は、修士研究の一環として、性格特性・思考スタイル・超常現象信奉について調べることを目的としています。<br><br> 調査は、18歳以上の日本国籍を有する方を対象に行われます。<br><br> 下記の注意事項に目を通し、同意いただける場合にのみ「次へ」を押して質問にお答えください。よろしくお願いいたします。<br><br> ・所要時間はおよそ15～20分です。<br><br> ・回答は話さず、お一人で行ってください。<br><br> ・最後のページで表示される、「回答を出力」を押すとファイルがダウンロードされます。そのファイルを以下のメールアドレスに送付していただき調査は終了します。「回答を出力」を押すだけでは回答は送信されませんのでご注意ください。<br> メール：hatazaki.yuri.w6@s.gifu-u.ac.jp<br><br> ・調査への参加は強制ではありません。回答するかどうかは個人の意思で判断することができます。また、途中で回答をやめたくなった場合は、すぐにやめることができます。<br><br> ・調査で得た個人情報について、調査目的以外での使用はいたしません。適切な管理のもとで保管され、破棄されます。回答の秘密は厳守され、個人が特定されることはありません。<br><br> 岐阜大学大学院　教育学研究科<br> 教育臨床心理学専攻<br> 修士課程1年　簱﨑　結莉<br> メール：hatazaki.yuri.w6@s.gifu-u.ac.jp<br> 指導教員：月元　敬　先生"
        })
// Raw HTML
this.options.items.push({
          "type": "html",
          "content": "<div class=\"content-horizontal-center\"><button>次へ</button></div>"
        })
this.options.submitButtonPosition = 'hidden';
}
      },
      "title": "Informed consent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": false,
          "type": "input",
          "label": "年齢を半角数字で入力してください (例：18歳→18)",
          "name": "Age",
          "attributes": {
            "type": "number",
            "min": "18"
          },
          "help": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Age"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "shuffle": true,
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//Text/Instructions
this.options.items.push({
  "type": "text",
  "title": "",
  "content": "以下の項目の内容について、どの程度同意するかを、0%から100%までの間で10%刻み (0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%) の選択肢の中から最も当てはまるものを1つ選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
})
//Multiple choice
const items = [
  '私は、大衆には決して知らされない、とても重大なことが世界で数多く起きていると思う。',
  '私は、政治家はふつう、自分たちの意思決定の本当の動機を教えてはくれないと思う。',
  '私は、政府当局が、すべての市民を厳重に監視していると思う。',
  '私は、表面的には関連のない出来事が、しばしば秘密の活動の結果であると思う。',
  '私は、政治的な決定に強い影響力を与える秘密の組織が存在すると思う。',
];
var itemNO;
for(let i = 0; i < items.length; i++){
  itemNO = i + 1;
  this.options.items.push({
     "required": false,
     "type": "radio",
     "options":[
{
      "label": "0%",
      "coding": "0"
    },
    { 
      "label": "10%",
      "coding": "1"
    },
    { 
      "label": "20%",
      "coding": "2"
    },
    { 
      "label": "30%",
      "coding": "3"
    },
    { 
      "label": "40%",
      "coding": "4"
    },
    { 
      "label": "50%",
      "coding": "5"
    },
    { 
      "label": "60%",
      "coding": "6"
    },
    { 
      "label": "70%",
      "coding": "7"
    },
    { 
      "label": "80%",
      "coding": "8"
    },
    { 
      "label": "90%",
      "coding": "9"
    },
    { 
      "label": "100%",
      "coding": "10"
    }
  ],
  "label":itemNO +"."+items[i],
  "name": "Q"+itemNO,
  "shuffle":false
 })
}
// Raw HTML
this.options.items.push({
          "type": "html",
          "content": "<div class=\"content-horizontal-center\"><button>次へ</button></div>"
        })
this.options.submitButtonPosition = 'hidden';

}
              },
              "title": "Conspiracy Mentality Questionnaire"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//Text/Instructions
this.options.items.push({
  "type": "text",
  "title": "",
  "content": "以下の項目の内容について、最も当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。<br><br>  1＝そう思わない<br> 2＝どちらかといえば、そう思わない<br> 3＝どちらともいえない<br>  4＝どちらかといえば、そう思う<br> 5＝そう思う<br><br>"
})
//Multiple choice
const items = [
  '神社などにお参りすると願い事がかなう',
  'お守りやお祓いには効力がある',
  '仏滅に結婚式を行うのはよくないことである',
  '悪い事をしたり、神仏に不敬を働くとばちがあたる',
  '極楽 (天国) や地獄は存在する',
  '呪いやたたりは存在する',
  '死者の霊は存在する',
  '体は死んでも魂は生き続ける',
  '輪廻転生 (生まれ変わり) はある',
  'いわゆる「心霊現象 (含：写真・動画)」は本当にある',
  'いわゆる「霊能力・霊感」は存在する',
  '前世や来世は存在する',
  '占星術や四柱推命などの、本やテレビの占いはよく当たっている',
  '手のひらの生命線が長いと長生きする',
  'タロットカード (西洋) や易 (東洋) による占いはよく当たる',
  '血液型による「性格診断」は当たっている',
  '未来を予測・予言できる人がいる',
  '夢が現実になるのは予知能力の1つである',
  '念力で物体を動かしたり曲げたりすることができる人がいる',
  '透視ができる人がいる',
  'テレパシーは存在する',
  '未解明のエネルギーを使える人がいる',
  '「気」などの精神の力で病気を治すことのできる人がいる',
  '指や皮膚で、物の色や文字が分かる人がいる',
  'UFOは実在する',
  '政府は宇宙人に関する事実を隠している',
  'UMA (未確認生物：ビッグフット・ネッシー・ツチノコなど) は実在する',
  '古代文明には宇宙人が関係している',
  'ムー大陸やアトランティス大陸は存在した',
  '地球以外の星に知的生命体は存在する',
  'マイナスイオンは健康によい効果がある',
  'コラーゲンを経口摂取すると肌によい効果がある',
  '「よい言葉や音楽」により、水の結晶が変化したり植物がよく育つようになる',
  '水晶や特別な鉱石を身に付けると、健康によい効果がある',
  '現代の医学以外に、ガンを治せる特別な治療法が存在する',
  '特別な「水」には、人を健康にしたり病気を治したりする効果がある',
];
var itemNO;
for(let i = 0; i < items.length; i++){
  itemNO = i + 1;
  this.options.items.push({
     "required": false,
     "type": "radio",
     "options":[
{
      "label": "1. そう思わない",
      "coding": "1"
    },
    { 
      "label": "2. どちらかといえば、そう思わない",
      "coding": "2"
    },
    { 
      "label": "3. どちらともいえない",
      "coding": "3"
    },
    { 
      "label": "4. どちらかといえば、そう思う",
      "coding": "4"
    },
    { 
      "label": "5. そう思う",
      "coding": "5"
    }
  ],
  "label":itemNO +"."+items[i],
  "name": "Q"+itemNO,
  "shuffle":false
 })
}
// Raw HTML
this.options.items.push({
          "type": "html",
          "content": "<div class=\"content-horizontal-center\"><button>次へ</button></div>"
        })
this.options.submitButtonPosition = 'hidden';

}
              },
              "title": "paranormal belief"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//Text/Instructions
this.options.items.push({
  "type": "text",
  "title": "",
  "content": "以下の項目の内容について、最も当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。<br><br>  1＝全くそう思わない<br> 2＝どちらかといえば、そう思わない<br> 3＝少しそう思わない<br> 4＝どちらともいえない<br> 5=少しそう思う<br> 6=どちらかといえば、そう思う<br> 7=強くそう思う<br><br>"
})
//Multiple choice
const items = [
  '心とは、脳のことである',
  '人の思考、性格、好み、選択は全て脳機能の産物でしかない',
  '脳の変化によって、善人にも悪人にも完全に変わることができる',
  '科学で説明できない心の側面は、魂で説明するのが最も適切だ',
  '人は、魂または精神によって身体を動かしている',
  '人の魂は死後も生き続ける',
  '将来は、脳の活動を見れば、その人の性格がわかるようになるかもしれない',
  '本当の自分とは、脳ではなく、その人の魂によって決定される',
  '将来的には、脳の活動を見ることで、他人が何を考えているかを正確に知ることができるようになるかもしれない',
  '心とは、魂のことである', 
];
var itemNO;
for(let i = 0; i < items.length; i++){
  itemNO = i + 1;
  this.options.items.push({
     "required": false,
     "type": "radio",
     "options":[
{
      "label": "1. 全くそう思わない",
      "coding": "1"
    },
    { 
      "label": "2. どちらかといえば、そう思わない",
      "coding": "2"
    },
    { 
      "label": "3. 少しそう思わない",
      "coding": "3"
    },
    { 
      "label": "4. どちらともいえない",
      "coding": "4"
    },
    { 
      "label": "5. 少しそう思う",
      "coding": "5"
    },
    { 
      "label": "6. どちらかといえば、そう思う",
      "coding": "6"
    },
    { 
      "label": "7. 強くそう思う",
      "coding": "7"
    }
  ],
  "label":itemNO +"."+items[i],
  "name": "Q"+itemNO,
  "shuffle":false
 })
}
// Raw HTML
this.options.items.push({
          "type": "html",
          "content": "<div class=\"content-horizontal-center\"><button>次へ</button></div>"
        })
this.options.submitButtonPosition = 'hidden';

}
              },
              "title": "mind-body dualism"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "shuffle": true,
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//Text/Instructions
this.options.items.push({
  "type": "text",
  "title": "",
  "content": "以下の項目の内容について、最も当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。<br><br>  1＝全くそう思わない<br> 2＝そう思わない<br> 3＝どちらかといえば、そう思わない<br> 4＝どちらかといえば、そう思う<br> 5=そう思う<br> 6=強くそう思う<br><br>"
})
//Multiple choice
const items = [
  '自分が抱いている考えを守ることは、たとえその考えに不利な証拠があるときでさえ、大事なことである。',
  '何かが本当にそうだという感じがするかどうかの方が、証拠があるかないかよりも大事なことである。',
  '自分がいま抱いている考えと食い違う証拠があるというだけなら、自分が間違っているということにはならない。',
  '自分の抱いている考えと反対の証拠が存在することもある。しかしそれは、考えを変えなくてはいけないということを意味するわけではない。',
  '自分で正しいと思っている考えがあるなら、たとえそれと食い違う明白な証拠があっても、その大切な信念を守り続けてもよい。',
  '話題や論点がなんであれ、自分が本当だと思っていることの方が、その考えと食い違う証拠よりも大事なことである。',
  '私は、ほとんど全てのことについて、間違ったやり方はたくさんあるが、正しいやり方は一つしかないと思う。',
  '自分の経験では、真実は白黒のつく明白なものである場合が多い。',
  '真実は、人によってや見方によって違うということはない。',
  '真実は変化しない。',
  'ものごとは真か偽かであって、その中間はない。',
  '正しいことと間違ったことの間で、折り合いをつけることはできない。',
  '私は自分の直感的な印象を頼りにすることを好んでいる。',
  '自分の予感や直感を信頼している。',
  'ものごとを決めるときには、直感に頼る傾向がある。',
  '生きていくうえでの困りごとをどうにかするとき、自分の「本能的直感」を使えば普通はうまくいっている。',
  'ものごとを決めるのに、いちばん参考になるのは直感だ。',
  'ものごとの手順を決めるとき、直感をあてにすることが多い。',
  '私は、複雑な問題を理解したり解決したりするのは、得意ではない。',
  '考えるというのは楽しいことだ、とは思っていない。',
  '私は、何かを深く考えないといけないような状況を避けるようにしている。',
  '私は、ものごとを細かく分析的に考える方ではない。',
  'ものごとを慎重に推理して答えを出すというのは、得意ではない。',
  '何かを長いあいだ一生懸命に考えても、満足感はほとんど得られない。',
  
];
var itemsArray = [];
var itemNO;

for(let i = 0; i < items.length; i++){
  itemNO = i + 1;
  itemsArray.push(
    {
      "label": items[i],
      "name": "Q"+itemNO
    }
  )
}
itemsArray = this.random.shuffle(itemsArray)
for (let i = 0; i < items.length; i++){
itemNO = i+1;
  this.options.items.push({
     "required": false,
     "type": "radio",
     "options":[
{
      "label": "1. 全くそう思わない",
      "coding": "1"
    },
    { 
      "label": "2. そう思わない",
      "coding": "2"
    },
    { 
      "label": "3. どちらかといえば、そう思わない",
      "coding": "3"
    },
    { 
      "label": "4. どちらかといえば、そう思う",
      "coding": "4"
    },
    { 
      "label": "5. そう思う",
      "coding": "5"
    },
    { 
      "label": "6. 強くそう思う",
      "coding": "6"
    }
  ],
  "label":itemNO +"."+itemsArray[i].label,
  "name": itemsArray[i].name,
  "shuffle":false
 })
}
// Raw HTML
this.options.items.push({
          "type": "html",
          "content": "<div class=\"content-horizontal-center\"><button>次へ</button></div>"
        })
this.options.submitButtonPosition = 'hidden';

}
              },
              "title": "4-CTSQ-J"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//Text/Instructions
this.options.items.push({
  "type": "text",
  "title": "",
  "content": "以下の項目の内容について、自分にどの程度あてはまっているかあてはまっていないかを考えて、以下の選択肢の中から回答してください。回答は選択肢のボタンをチェックすることで行ってください。<br><br>  1＝あてはまらない (そうではない)<br> 2＝どちらかといえば、あてはまらない<br> 3＝どちらともいえない<br>  4＝どちらかといえば、あてはまる<br> 5＝あてはまる (そうである)<br><br>  なお、「3：どちらともいえない」は、できるだけ選択しないようにしてください。 (どうしてもどちらとも決められない場合にのみ3を選択するようにしてください)"
})
//Multiple choice
const items = [
  '美術館に行くと、とても退屈してしまう。',
  '最後になってあわてないために、前もって計画を立ててものごとの準備をする。',
  'たとえひどく不当な扱いをされた相手に対しても、めったに悪意を抱くことはない。',
  '私は全体的に自分自身にほどよく満足していると感じている。',
  '悪天候のときに旅行をしなければならないとしたら、恐れを感じる。',
  'たとえそうすればうまくいくと思っても、仕事の上で昇進するためにお世辞を言ったりしようとは思わない。',
  '他の国の歴史や政治について学ぶことに興味がある。',
  '目標を達成しようとするときは、しばしば自分をとても激しく追い詰める。',
  '人からときどき、他人に対して批判的すぎると言われる。',
  '集団での話し合いでは、自分の意見を言うことはめったにない。',
  'ちょっとしたことが心配になって、それを抑えることができないことがある。',
  'もし決して捕まらないとわかっているのなら、私は1億円を盗もうと思う。',
  '小説を書いたり、曲を作ったり、絵を描いたりといった、芸術作品を創作することは楽しい。',
  '何かの仕事をするとき、細かい点にはあまり注意を払わない。',
  'ときどき人から、私は頑固すぎると言われる。',
  '一人でやるよりも、積極的な人との関わりを含む仕事の方が好きだ。',
  '苦痛な体験に苦しんでいるときには、慰めを与えてくれる人が必要である。',
  '大金を持つことは、自分にとって特に重要なことではない。',
  'とても斬新で慣習にとらわれない考えを考慮することは、時間の無駄だと思う。',
  '私は、よく考えた上でよりも、そのときの気持ち次第で物事を決める（ことがある）。',
  '他の人は、私のことを短気な人間だと思っている。',
  'たいていは、元気で楽天的である。',
  '他の人が泣いているのをみると、私も泣きたくなる。',
  '私は、平均的な人間よりも、尊重される権利があると思う。',
  'もし機会があれば、クラシック音楽の演奏会に行きたい。',
  '仕事をしているとき、ときどき自分がだらしがないために困ってしまうことがある。',
  '私にひどいことをした人に対する私の態度は、「許して忘れる」ことである。',
  '自分は人気がない人間だと感じている。',
  '身体的な危険が迫ると、とても怖い。',
  'もし、何かをある人から手に入れようと思っているときには、その人がくだらない冗談を言っても笑うだろう。',
  '百科事典を読むことを楽しんだことはない。',
  '必要とされる最低限の仕事しかしない。',
  '他の人を判断するときには、甘い (手加減する) 傾向がある。',
  '社会的（対人）場面では、たいてい私がはじめに行動する人間である。',
  '他の人ほどは心配性ではない。',
  'たとえどんなに大金でも、賄賂は決して受け取らない。',
  '人から、よく私は優れた想像力を持っていると言われることがある。',
  'たとえ時間がかかっても、自分の仕事ではいつも正確であるようにしている。',
  '人が私に同調しないときは、私はたいてい自分の意見について、かなり柔軟である。',
  '新しい場所に行っていつも最初にすることは、友達を作ることである。',
  '誰かの感情的な支えがないとしても、困難な状況に対処することができる。',
  '高価で贅沢なものを所有することで、多くの楽しみが得られる。',
  '私は、型にはまらない見方をする人が好きである。',
  '行動する前に考えないので、たくさんの失敗をしてしまう。',
  'たいていの人は、私よりもすぐに怒り出す。',
  'たいていの人は、私よりも陽気で活発である。',
  '自分と親しい人が長い間遠くに行ってしまうときには、強い感情を感じる。',
  '私が高い地位にいる重要な人間であることを他の人に知ってほしい。',
  '自分のことを、芸術家タイプとか、創造的なタイプであるとは思わない。',
  '人からしばしば完全主義者だと言われる。',
  'たとえ人がたくさん間違いを犯したときでも、私はめったに否定的なことは言わない。',
  '時々自分は価値のない人間だと感じる。',
  'たとえ非常 (緊急) の場合でも、あわてふためいたりすることはない。',
  '誰かに私のたのみを聞いてもらうために、その人を好きなふりをしようとは思わない。',
  '哲学について議論するのは、うんざりである。',
  '私は、何でも計画通りにするよりも、思いついたことをするのが好きである。',
  '人から私が間違っていると言われたとき、私の最初の反応は、相手に同意しないことである。',
  '集団の中にいるとき、しばしばその集団を代表して話をする人間である。',
  'たいていの人がとても感傷的になるような状況でも、私は冷静でいられる。',
  'もし絶対に捕まらないなら、偽札を使ってみたい。',
];
var itemNO;
for(let i = 0; i < items.length; i++){
  itemNO = i + 1;
  this.options.items.push({
     "required": false,
     "type": "radio",
     "options":[
    {
      "label": "1. あてはまらない (そうではない)",
      "coding": "1"
    },
    { 
      "label": "2. どちらかといえば、あてはまらない",
      "coding": "2"
    },
    { 
      "label": "3. どちらともいえない",
      "coding": "3"
    },
    { 
      "label": "4. どちらかといえば、あてはまる",
      "coding": "4"
    },
    { 
      "label": "5. あてはまる (そうである)",
      "coding": "5"
    }
  ],
  "label":itemNO +"."+items[i],
  "name": "Q"+itemNO,
  "shuffle":false
 })
}
// Raw HTML
this.options.items.push({
          "type": "html",
          "content": "<div class=\"content-horizontal-center\"><button>次へ</button></div>"
        })
this.options.submitButtonPosition = 'hidden';
}
              },
              "title": "HEXACO"
            }
          ]
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
// Text/Instructions
this.options.items.push({
          "type": "text",
           "title": "性格特性・思考スタイル・超常現象信奉に関する調査",
           "content": "この度はお忙しいところ、本研究にご協力いただきまして、誠にありがとうございました。<br><br> 下記の「回答を出力」を押すとファイルがダウンロードされます。そのファイルを以下のメールアドレスに送付していただき調査は終了します。「回答を出力」を押すだけでは回答は送信されませんのでご注意ください。<br> メール：hatazaki.yuri.w6@s.gifu-u.ac.jp<br><br>この調査は、修士研究の一環として、性格特性・思考スタイル・超常現象信奉について調べることを目的としています。<br><br>超常現象を信じること自体は、それ単体で精神的健康や社会的充実感に直接的な影響を与えるわけではありませんが、他の心理的特性と組み合わさることで、精神的な不調や抑うつ経験に関連することが示唆されています。そのため本研究では、超常現象の信奉傾向とその他の要因との関連性を明らかにすることを目的として、ご協力いただきました。<br><br> 調査で得た個人情報について、調査目的以外での使用はいたしません。回答は適切な管理のもとで保管され、分析を終えた後破棄されます。<br><br> 今回の研究においてご意見・ご質問等ございましたら、下記のメールアドレスまでご連絡ください。<br><br> 岐阜大学大学院　教育学研究科<br> 教育臨床心理学専攻<br> 修士課程1年　簱﨑　結莉<br> メール：hatazaki.yuri.w6@s.gifu-u.ac.jp<br> 指導教員：月元　敬　先生"
        })
// Raw HTML
this.options.items.push({
          "type": "html",
          "content": "<div class=\"content-horizontal-center\"><button>回答を出力</button></div>"
        })
this.options.submitButtonPosition = 'hidden';
}
      },
      "title": "last"
    }
  ]
})

// Let's go!
study.run()