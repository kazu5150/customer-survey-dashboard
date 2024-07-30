import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const surveyData = {
    Q1: [
      { 営業所: '目黒', パターン: 'PC', 紹介: 2, 知名度があった: 1, 'CM、チラシ、各種広告を見た': 0, 'その他': 0 },
      { 営業所: '神奈川', パターン: 'PC', 紹介: 1, 知名度があった: 0, 'CM、チラシ、各種広告を見た': 0, 'その他': 1 },
      { 営業所: '葛飾', パターン: 'PC', 紹介: 1, 知名度があった: 0, 'CM、チラシ、各種広告を見た': 0, 'その他': 0 },
      { 営業所: '千葉', パターン: 'PC', 紹介: 0, 知名度があった: 0, 'CM、チラシ、各種広告を見た': 0, 'その他': 1 },
      { 営業所: '大和', パターン: 'PC', 紹介: 0, 知名度があった: 0, 'CM、チラシ、各種広告を見た': 0, 'その他': 1 },
      { 営業所: '城東', パターン: 'PC', 紹介: 1, 知名度があった: 0, 'CM、チラシ、各種広告を見た': 0, 'その他': 0 },
      { 営業所: '目黒', パターン: 'TC', 紹介: 3, 知名度があった: 1, 'CM、チラシ、各種広告を見た': 1, 'その他': 0 },
      { 営業所: '神奈川', パターン: 'TC', 紹介: 0, 知名度があった: 0, 'CM、チラシ、各種広告を見た': 0, 'その他': 0 },
      { 営業所: '葛飾', パターン: 'TC', 紹介: 1, 知名度があった: 0, 'CM、チラシ、各種広告を見た': 0, 'その他': 0 },
      { 営業所: '千葉', パターン: 'TC', 紹介: 0, 知名度があった: 0, 'CM、チラシ、各種広告を見た': 0, 'その他': 0 },
      { 営業所: '大和', パターン: 'TC', 紹介: 0, 知名度があった: 0, 'CM、チラシ、各種広告を見た': 0, 'その他': 0 },
      { 営業所: '城東', パターン: 'TC', 紹介: 0, 知名度があった: 0, 'CM、チラシ、各種広告を見た': 0, 'その他': 0 }
    ],
    Q2: [
      { 営業所: '目黒', パターン: 'PC', 詳しくあった: 2, 普通: 1, '理解し難かった': 0, なかった: 0 },
      { 営業所: '神奈川', パターン: 'PC', 詳しくあった: 1, 普通: 1, '理解し難かった': 0, なかった: 0 },
      { 営業所: '葛飾', パターン: 'PC', 詳しくあった: 1, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '千葉', パターン: 'PC', 詳しくあった: 1, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '大和', パターン: 'PC', 詳しくあった: 0, 普通: 1, '理解し難かった': 0, なかった: 0 },
      { 営業所: '城東', パターン: 'PC', 詳しくあった: 1, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '目黒', パターン: 'TC', 詳しくあった: 5, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '神奈川', パターン: 'TC', 詳しくあった: 0, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '葛飾', パターン: 'TC', 詳しくあった: 1, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '千葉', パターン: 'TC', 詳しくあった: 0, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '大和', パターン: 'TC', 詳しくあった: 0, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '城東', パターン: 'TC', 詳しくあった: 0, 普通: 0, '理解し難かった': 0, なかった: 0 }
    ],
    Q3: [
      { 営業所: '目黒', パターン: 'PC', 詳しくあった: 2, 普通: 1, '理解し難かった': 0, なかった: 0 },
      { 営業所: '神奈川', パターン: 'PC', 詳しくあった: 1, 普通: 1, '理解し難かった': 0, なかった: 0 },
      { 営業所: '葛飾', パターン: 'PC', 詳しくあった: 1, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '千葉', パターン: 'PC', 詳しくあった: 1, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '大和', パターン: 'PC', 詳しくあった: 0, 普通: 1, '理解し難かった': 0, なかった: 0 },
      { 営業所: '城東', パターン: 'PC', 詳しくあった: 1, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '目黒', パターン: 'TC', 詳しくあった: 5, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '神奈川', パターン: 'TC', 詳しくあった: 0, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '葛飾', パターン: 'TC', 詳しくあった: 1, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '千葉', パターン: 'TC', 詳しくあった: 0, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '大和', パターン: 'TC', 詳しくあった: 0, 普通: 0, '理解し難かった': 0, なかった: 0 },
      { 営業所: '城東', パターン: 'TC', 詳しくあった: 0, 普通: 0, '理解し難かった': 0, なかった: 0 }
    ],
    Q4: [
      { 営業所: '目黒', パターン: 'PC', 良い: 1, 普通: 2, 悪い: 0, その他: 0 },
      { 営業所: '神奈川', パターン: 'PC', 良い: 0, 普通: 2, 悪い: 0, その他: 0 },
      { 営業所: '葛飾', パターン: 'PC', 良い: 1, 普通: 0, 悪い: 0, その他: 0 },
      { 営業所: '千葉', パターン: 'PC', 良い: 0, 普通: 1, 悪い: 0, その他: 0 },
      { 営業所: '大和', パターン: 'PC', 良い: 0, 普通: 1, 悪い: 0, その他: 0 },
      { 営業所: '城東', パターン: 'PC', 良い: 0, 普通: 1, 悪い: 0, その他: 0 },
      { 営業所: '目黒', パターン: 'TC', 良い: 2, 普通: 3, 悪い: 0, その他: 0 },
      { 営業所: '神奈川', パターン: 'TC', 良い: 0, 普通: 0, 悪い: 0, その他: 0 },
      { 営業所: '葛飾', パターン: 'TC', 良い: 1, 普通: 0, 悪い: 0, その他: 0 },
      { 営業所: '千葉', パターン: 'TC', 良い: 0, 普通: 0, 悪い: 0, その他: 0 },
      { 営業所: '大和', パターン: 'TC', 良い: 0, 普通: 0, 悪い: 0, その他: 0 },
      { 営業所: '城東', パターン: 'TC', 良い: 0, 普通: 0, 悪い: 0, その他: 0 }
    ],
    Q5: [
      { 営業所: '目黒', パターン: 'PC', '大変満足': 0, '満足': 2, '普通': 1, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '神奈川', パターン: 'PC', '大変満足': 0, '満足': 2, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '葛飾', パターン: 'PC', '大変満足': 0, '満足': 1, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '千葉', パターン: 'PC', '大変満足': 0, '満足': 1, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '大和', パターン: 'PC', '大変満足': 0, '満足': 1, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '城東', パターン: 'PC', '大変満足': 0, '満足': 0, '普通': 0, 'やや不満': 0, '大変不満': 1 },
      { 営業所: '目黒', パターン: 'TC', '大変満足': 1, '満足': 4, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '神奈川', パターン: 'TC', '大変満足': 0, '満足': 0, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '葛飾', パターン: 'TC', '大変満足': 0, '満足': 1, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '千葉', パターン: 'TC', '大変満足': 0, '満足': 0, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '大和', パターン: 'TC', '大変満足': 0, '満足': 0, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '城東', パターン: 'TC', '大変満足': 0, '満足': 0, '普通': 0, 'やや不満': 0, '大変不満': 0 }
    ],
    Q6: [
      { 営業所: '目黒', パターン: 'PC', '大変満足': 0, '満足': 3, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '神奈川', パターン: 'PC', '大変満足': 0, '満足': 2, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '葛飾', パターン: 'PC', '大変満足': 0, '満足': 1, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '千葉', パターン: 'PC', '大変満足': 0, '満足': 1, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '大和', パターン: 'PC', '大変満足': 0, '満足': 1, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '城東', パターン: 'PC', '大変満足': 0, '満足': 0, '普通': 0, 'やや不満': 1, '大変不満': 0 },
      { 営業所: '目黒', パターン: 'TC', '大変満足': 1, '満足': 4, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '神奈川', パターン: 'TC', '大変満足': 0, '満足': 0, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '葛飾', パターン: 'TC', '大変満足': 0, '満足': 1, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '千葉', パターン: 'TC', '大変満足': 0, '満足': 0, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '大和', パターン: 'TC', '大変満足': 0, '満足': 0, '普通': 0, 'やや不満': 0, '大変不満': 0 },
      { 営業所: '城東', パターン: 'TC', '大変満足': 0, '満足': 0, '普通': 0, 'やや不満': 0, '大変不満': 0 }
    ]
};


const categories = {
  Q1: ['紹介', '知名度があった', 'CM、チラシ、各種広告を見た', 'その他'],
  Q2: ['詳しくあった', '普通', '理解し難かった', 'なかった'],
  Q3: ['詳しくあった', '普通', '理解し難かった', 'なかった'],
  Q4: ['良い', '普通', '悪い', 'その他'],
  Q5: ['大変満足','満足','普通','やや不満','大変不満'],
  Q6: ['大変満足','満足','普通','やや不満','大変不満']
};

const aggregateData = (data, questionCategories, pattern, office) => {
  return data
    .filter(item => 
      (pattern === '全体' || item.パターン === pattern) && 
      (office === '全営業所' || item.営業所 === office)
    )
    .reduce((acc, curr) => {
      questionCategories.forEach(category => {
        acc[category] = (acc[category] || 0) + (curr[category] || 0);
      });
      return acc;
    }, {});
};

const prepareChartData = (aggregatedData) => {
  return Object.entries(aggregatedData)
    .map(([name, value]) => ({ name, value }))
    .filter(item => item.value > 0);
};

const CustomerSurveyDashboard = () => {
  const [selectedPattern, setSelectedPattern] = useState('全体');
  const [selectedOffice, setSelectedOffice] = useState('全営業所');
  const [activeQuestion, setActiveQuestion] = useState('Q1');

  const offices = useMemo(() => {
    const allOffices = new Set();
    Object.values(surveyData).forEach(questionData => {
      questionData.forEach(item => allOffices.add(item.営業所));
    });
    return ['全営業所', ...Array.from(allOffices)];
  }, []);

  const chartData = useMemo(() => {
    const data = surveyData[activeQuestion];
    const questionCategories = categories[activeQuestion];
    const aggregated = aggregateData(data, questionCategories, selectedPattern, selectedOffice);
    return prepareChartData(aggregated);
  }, [activeQuestion, selectedPattern, selectedOffice]);

  const getQuestionTitle = (questionKey) => {
    const titles = {
      Q1: 'ご利用のきっかけ',
      Q2: '契約前の説明や提案',
      Q3: '作業後の説明',
      Q4: '社員の態度や服装',
      Q5: '施行後の効果や後片付け',
      Q6: '今回の契約の総合評価'
    };
    return `${questionKey}：${titles[questionKey]}`;
  };




  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '40px', textAlign: 'center', marginBottom: '20px' }}>三共消毒様 2024年6月 顧客満足度調査</h1>

      <div style={{ marginTop: '80px' }}>

      <div style={{ marginBottom: '80px' }}></div>

      <h1>アンケート結果ダッシュボード</h1>

      <div style={{ marginBottom: '40px' }}></div>

      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', marginBottom: '40px' }}>

        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <label htmlFor="pattern-select" style={{ marginRight: '10px' }}>パターン選択：</label>
            <select
              id="pattern-select"
              value={selectedPattern}
              onChange={(e) => setSelectedPattern(e.target.value)}
              style={{ padding: '5px' }}
            >
              <option value="全体">全体</option>
              <option value="TC">TCパターン</option>
              <option value="PC">PCパターン</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="office-select" style={{ marginRight: '10px' }}>営業所選択：</label>
            <select
              id="office-select"
              value={selectedOffice}
              onChange={(e) => setSelectedOffice(e.target.value)}
              style={{ padding: '5px' }}
            >
              {offices.map(office => (
                <option key={office} value={office}>{office}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="question-select" style={{ marginRight: '10px' }}>質問選択：</label>
            <select
              id="question-select"
              value={activeQuestion}
              onChange={(e) => setActiveQuestion(e.target.value)}
              style={{ padding: '5px' }}
            >
              <option value="Q1">Q1: ご利用のきっかけ</option>
              <option value="Q2">Q2: 契約前の説明や提案</option>
              <option value="Q3">Q3: 作業後の状況説明</option>
              <option value="Q4">Q4: 社員の服装や態度</option>
              <option value="Q5">Q5: 施行後の効果や後片付け</option>
              <option value="Q6">Q6: 今回の契約の総合評価</option>
            </select>
          </div>
        </div>

        {chartData.length > 0 ? (
          <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>データがありません</div>
        )}

        <div style={{ marginTop: '20px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{getQuestionTitle(activeQuestion)}</h2>
          {chartData.length > 0 ? (
            <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
              {chartData.map(item => (
                <li key={item.name}>
                  {item.name}: {item.value} 件 ({((item.value / chartData.reduce((sum, d) => sum + d.value, 0)) * 100).toFixed(1)}%)
                </li>
              ))}
            </ul>
          ) : (
            <p>データが不足しているため、分析サマリーを表示できません。</p>
          )}
        </div>


      </div>



      <div style={{ marginBottom: '80px' }}></div>

      <div style={{ marginTop: '20px' }}>



        <h1>1. 調査概要</h1>
        <p>実施した顧客満足度調査の概要は以下の通りです。</p>
        <ul>
          <li>調査対象: TC, PC</li>
          <li>対象営業所:目黒・神奈川・葛飾・千葉・大和・城東</li>
          <li>対象調査年月:2024年6月</li>
          <li>調査方法: 対面によるアンケート</li>
          <li>回答者数: 22名（有効回答数: 15名）</li>
          <li>アンケート項目</li>
          <li>
            <ul>
              <li>Q1:ご利用のきっかけ</li>
              <li>Q2:契約前の説明や提案</li>
              <li>Q3:作業後の状況説明</li>
              <li>Q4:社員の服装や態度</li>
              <li>Q5:施行後の効果や後片付け</li>
              <li>Q6:今回の契約の総合評価</li>
              <li>コメント</li>
            </ul>
          </li>
        </ul>

        <div style={{ marginBottom: '80px' }}></div>

        <h1>2. 主な調査結果</h1>
        <div style={{ marginBottom: '60px' }}></div>
        <h2 style={{ fontSize: '28px' }}>2.1 サービス認知経路(Q1)</h2>
        <p>お客様が当社のサービスを知るきっかけとして、以下が主な経路となっています：</p>
        <ul>
          <li>ご紹介: 9件 (60%)
            <ul>
              <li>設計事務所、工務店、ご近所様など</li>
            </ul>
          </li>
          <li>知名度: 2件 (13.3%)</li>
          <li>広告 (CM、チラシなど): 1件 (6.7%)</li>
          <li>その他 (タウンページ、休眠物件など): 3件 (20%)</li>
        </ul>
        <p>特に、多くのお客様が「紹介」によって当社サービスをお知りいただいており、ご信頼いただいていることを大変光栄に思います。</p>

        <div style={{ marginBottom: '60px' }}></div>

        <h2 style={{ fontSize: '28px' }}>2.2 サービス品質評価</h2>
        <div style={{ marginBottom: '40px' }}></div>
        <ol style={{ fontSize: '18px' }}>
          <li><strong style={{ fontSize: '20px' }}>契約前の説明や提案(Q2)</strong>:
          <table style={{ width: '90%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0' }}>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'left' }}>評価</th>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>件数</th>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>割合</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>詳しくあった</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>12件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>80%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>普通</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>4件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>20%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>理解し難かった</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0%</td>
                </tr>
              </tbody>
            </table>
            <div className="comment">
              <p>契約前の説明や提案について、80%のお客様が「詳しくあった」と評価しており、残りの20%も「普通」と回答しています。これは、当社の営業担当者が丁寧な説明と適切な提案を心がけている証と言えるでしょう。</p>
            </div>
          </li>

          <div style={{ marginBottom: '60px' }}></div>

          <li><strong style={{ fontSize: '20px' }}>作業後の状況説明(Q3)</strong>:
          <table style={{ width: '90%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0' }}>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'left' }}>評価</th>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>件数</th>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>割合</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>詳しくあった</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>12件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>80.0%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>普通</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>3件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>20.0%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>理解し難かった</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0%</td>
                </tr>
              </tbody>
            </table>
            <div className="comment">
              <p>作業後の状況説明においては、80%のお客様が「詳しくあった」と高く評価しています。これは、当社の技術者が作業内容や結果を分かりやすく説明する努力を続けている成果だと考えられます。</p>
            </div>
          </li>

          <div style={{ marginBottom: '60px' }}></div>

          <li><strong style={{ fontSize: '20px' }}>社員の服装や態度(Q4)</strong>:
          <table style={{ width: '90%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0' }}>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'left' }}>評価</th>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>件数</th>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>割合</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>良い</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>5件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>33.3%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>普通</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>10件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>66.7%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>悪い</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0%</td>
                </tr>
              </tbody>
            </table>
            <div className="comment">
              <p>社員の服装や態度については、「良い」または「普通」という評価のみで、「悪い」という評価はありませんでした。しかし、「良い」という評価が33.3%にとどまっている点は、今後改善の余地があると考えられます。</p>
            </div>
          </li>

          <div style={{ marginBottom: '60px' }}></div>

          <li><strong style={{ fontSize: '20px' }}>施工後の効果や後片付け(Q5)</strong>:
          <table style={{ width: '90%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0' }}>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'left' }}>評価</th>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>件数</th>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>割合</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>大変満足</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>1件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>6.7%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>満足</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>12件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>80.0%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>普通</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>1件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>6.7%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>やや不満</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>大変不満</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>1件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>6.7%</td>
                </tr>
              </tbody>
            </table>
            <div className="comment">
              <p>施工後の効果や後片付けについては、86.7%のお客様が「満足」以上の評価をしています。一方で、「大変不満」という評価も1件あり、個別のケースに対する詳細な検討が必要かもしれません。</p>
            </div>
          </li>

          <div style={{ marginBottom: '60px' }}></div>

          <li><strong style={{ fontSize: '20px' }}>今回の契約の総合評価(Q6)</strong>:
          <table style={{ width: '90%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0' }}>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'left' }}>評価</th>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>件数</th>
                  <th style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>割合</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>大変満足</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>1件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>6.7%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>満足</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>13件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>86.7%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>普通</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>やや不満</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>1件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>6.7%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '5px' }}>大変不満</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0件</td>
                  <td style={{ border: '1px solid #ddd', padding: '5px', textAlign: 'right' }}>0%</td>
                </tr>
              </tbody>
            </table>
            <div className="comment">
              <p>総合評価では、93.4%のお客様が「満足」以上の評価をしており、全体として高い満足度が得られています。しかし、「やや不満」という評価も1件あることから、さらなるサービス向上の余地があると考えられます。</p>
            </div>
          </li>
        </ol>

        <div style={{ marginBottom: '40px' }}></div>

        <h3>総括：</h3>
        <div className="comment">
          <p>全体的に見て、三共消毒（株）様のサービスは高い評価を得ていると言えます。特に、契約前の説明や提案、作業後の状況説明において高い満足度が得られています。一方で、社員の服装や態度、施工後の効果や後片付けにおいては、さらなる改善の余地があります。今後は、これらの結果を踏まえ、より一層のサービス品質向上に努めていく必要があるでしょう。</p>
        </div>

      </div>

      
      <div style={{ marginBottom: '80px' }}></div>



        <h1>3. 改善に向けて</h1>
        <p>センチメント分析と個別のフィードバックを基に、以下の点について改善を提案いたします：</p>
        <ol>
          <li>より確実な害虫・害獣対策の実施
            <ul>
              <li>特に、ネズミ対策の強化と長期的なフォローアップ</li>
            </ul>
          </li>
          <li>スタッフの接客マナーのさらなる向上
            <ul>
              <li>身だしなみを含めた細やかな配慮の徹底</li>
            </ul>
          </li>
          <li>アフターフォローの強化
            <ul>
              <li>施工後の効果確認と迅速な追加対応</li>
            </ul>
          </li>
        </ol>

        <div style={{ marginBottom: '80px' }}></div>

        <h1>4. おわりに</h1>
        <p>今回の調査で、86.7%のお客様に「満足」または「大変満足」とのご評価をいただき、三共消毒のサービスが高く評価されていることが分かりました。一方で、改善すべき点も明確になりました。これらの課題に取り組むことで、今後さらにお客様のご期待に添えるサービスを提供できると考えられます。</p>
        <p>[会社名] [担当部署]</p>

      </div>
    </div>


  );
};

export default CustomerSurveyDashboard;