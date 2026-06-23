// ============================================================================
// CHINESE 65 SPECIALIZED LECTURES - PROFESSIONAL & ACADEMIC DOMAINS
// ============================================================================
// Domain 1: Business & Occupational (20 lectures)
// Domain 2: Academic & Cultural (15 lectures)
// Domain 3: Technology & IT (10 lectures)
// Domain 4: Medical & Science (10 lectures)
// Domain 5: Media & Journalism (10 lectures)
//
// Each lecture: 4-6 sections with professional terminology & real-world usage
// ============================================================================

export const Chinese65Specialized = {
  // ========== DOMAIN 1: BUSINESS & OCCUPATIONAL (20 LECTURES) ==========
  business: {
    domain: 'Business & Occupational',
    totalLectures: 20,
    lectures: [
      {
        id: 'zho-biz-01',
        num: 1,
        title: 'Corporate Structure & Organizational Hierarchy',
        duration: '16:00',
        topics: ['business_management', 'hierarchy', 'corporate_terminology'],
        sections: [
          {
            type: 'main_title',
            content: '企业结构与组织层级 | 企業結構與組織層級 | Corporate Structure and Organizational Framework'
          },
          {
            type: 'vocabulary',
            title: 'Organization Terminology',
            vocabulary: [
              {
                term_simplified: '董事会',
                term_traditional: '董事會',
                term_classical: '董主會',
                pinyin: 'dǒng shì huì',
                english: 'Board of Directors',
                category: 'corporate',
                example_simplified: '董事会召开了年度会议。',
                example_traditional: '董事會召開了年度會議。',
                example_classical: '董主會召開年度會議矣。',
                usage_context: 'Highest governance body of a corporation',
                cultural_note: '董 (dǒng) = director; 事 (shì) = matter/business; 会 (huì) = association'
              },
              {
                term_simplified: '执行董事',
                term_traditional: '執行董事',
                term_classical: '執行董主',
                pinyin: 'zhí xíng dǒng shì',
                english: 'Executive Director / Chief Executive Officer',
                category: 'corporate_role',
                example_simplified: '执行董事负责公司的日常运营。',
                example_traditional: '執行董事負責公司的日常運營。',
                example_classical: '執行董主掌公司日常之運營。',
                usage_context: 'Leadership position with operational authority',
                cultural_note: '执行 (zhí xíng) = execute/implement; 董事 (dǒng shì) = director'
              },
              {
                term_simplified: '财务部',
                term_traditional: '財務部',
                term_classical: '財務部',
                pinyin: 'cái wù bù',
                english: 'Finance Department',
                category: 'department',
                example_simplified: '财务部管理公司的预算和支出。',
                example_traditional: '財務部管理公司的預算和支出。',
                example_classical: '財務部掌管公司之預算與支出。',
                usage_context: 'Department handling financial affairs',
                cultural_note: '财务 (cái wù) = finance; 部 (bù) = department'
              },
              {
                term_simplified: '人力资源',
                term_traditional: '人力資源',
                term_classical: '人力資源',
                pinyin: 'rén lì zī yuán',
                english: 'Human Resources',
                category: 'department',
                example_simplified: '人力资源部负责招聘和员工管理。',
                example_traditional: '人力資源部負責招聘和員工管理。',
                example_classical: '人力資源部掌招聘與員工之管理。',
                usage_context: 'HR department overseeing recruitment and employee relations',
                cultural_note: '人力 (rén lì) = manpower; 资源 (zī yuán) = resources'
              },
              {
                term_simplified: '销售部',
                term_traditional: '銷售部',
                term_classical: '銷售部',
                pinyin: 'xiāo shòu bù',
                english: 'Sales Department',
                category: 'department',
                example_simplified: '销售部的目标是增加客户数量。',
                example_traditional: '銷售部的目標是增加客戶數量。',
                example_classical: '銷售部之目標乃增客數也。',
                usage_context: 'Department responsible for revenue generation',
                cultural_note: '销售 (xiāo shòu) = sales/selling'
              },
              {
                term_simplified: '市场营销',
                term_traditional: '市場營銷',
                term_classical: '市場營銷',
                pinyin: 'shì chǎng yíng xiāo',
                english: 'Marketing',
                category: 'department',
                example_simplified: '市场营销团队制定了新的推广策略。',
                example_traditional: '市場營銷團隊制定了新的推廣策略。',
                example_classical: '市場營銷之隊制定新推廣策略矣。',
                usage_context: 'Strategic promotion and brand building',
                cultural_note: '市场 (shì chǎng) = market; 营销 (yíng xiāo) = marketing'
              }
            ]
          },
          {
            type: 'dialogue',
            title: 'Corporate Organization Conversation',
            exchanges: [
              {
                speaker: 'HR Manager',
                simplified: '我们公司有五个主要部门。董事会在最高层。',
                traditional: '我們公司有五個主要部門。董事會在最高層。',
                classical: '吾公司有五大要部。董主會居最高層。',
                pinyin: 'Wǒ men gōng sī yǒu wǔ ge zhǔ yào bù mén. Dǒng shì huì zài zuì gāo céng.',
                english: 'Our company has five main departments. The Board of Directors is at the top.'
              },
              {
                speaker: 'Employee',
                simplified: '那执行董事在哪个部门？',
                traditional: '那執行董事在哪個部門？',
                classical: '夫執行董主在何部矣？',
                pinyin: 'Nà zhí xíng dǒng shì zài nǎ ge bù mén?',
                english: 'Which department is the Executive Director in?'
              },
              {
                speaker: 'HR Manager',
                simplified: '执行董事不属于任何部门。他直接向董事会报告。',
                traditional: '執行董事不屬於任何部門。他直接向董事會報告。',
                classical: '執行董主不屬於任何部。彼直接向董主會報告。',
                pinyin: 'Zhí xíng dǒng shì búshǔ yú rèn hé bù mén. Tā zhí jiē xiàng dǒng shì huì bào gào.',
                english: 'The Executive Director is not part of any department. He reports directly to the Board.'
              }
            ]
          },
          {
            type: 'business_context',
            title: 'International Business Structure',
            content: '大型跨国公司通常有集中的全球总部和各地区的分支机构。总部管理战略决策，分支机构执行地区业务。| Large multinational corporations typically have centralized global headquarters with regional branch offices. Headquarters manages strategic decisions while branches execute regional operations. | 大型跨國公司常有集中之全球總部與各地域之分支機構。總部管理戰略決策，分支機構執行地區業務。'
          },
          {
            type: 'industry_terms',
            title: 'Key Business Metrics',
            terms: [
              { simplified: '营业收入', traditional: '營業收入', english: 'Revenue / Operating Income', pinyin: 'yíng yè shōu rù' },
              { simplified: '利润', traditional: '利潤', english: 'Profit', pinyin: 'lì rùn' },
              { simplified: '股东', traditional: '股東', english: 'Shareholder', pinyin: 'gǔ dōng' },
              { simplified: '季度报告', traditional: '季度報告', english: 'Quarterly Report', pinyin: 'jì dù bào gào' }
            ]
          }
        ]
      },
      {
        id: 'zho-biz-02',
        num: 2,
        title: 'International Business & Trade Terminology',
        duration: '15:00',
        topics: ['international_trade', 'import_export', 'commerce'],
        sections: [
          {
            type: 'main_title',
            content: '国际贸易与商业术语 | 國際貿易與商業術語 | International Trade and Commerce Terminology'
          },
          {
            type: 'vocabulary',
            title: 'Trade & Commerce Terms',
            vocabulary: [
              {
                term_simplified: '进出口',
                term_traditional: '進出口',
                term_classical: '進出貿易',
                pinyin: 'jìn chū kǒu',
                english: 'Import and Export',
                category: 'trade',
                example_simplified: '我们公司的进出口业务很发达。',
                example_traditional: '我們公司的進出口業務很發達。',
                example_classical: '吾公司之進出貿易甚發達矣。',
                usage_context: 'Buying and selling goods internationally',
                cultural_note: '进 (jìn) = enter/import; 出 (chū) = exit/export; 口 (kǒu) = port'
              },
              {
                term_simplified: '关税',
                term_traditional: '關稅',
                term_classical: '關稅',
                pinyin: 'guān shuì',
                english: 'Tariff / Customs Duty',
                category: 'trade',
                example_simplified: '进口商品需要缴纳关税。',
                example_traditional: '進口商品需要繳納關稅。',
                example_classical: '進口商品需繳納關稅矣。',
                usage_context: 'Taxes on imported or exported goods',
                cultural_note: '关 (guān) = barrier/checkpoint; 税 (shuì) = tax'
              },
              {
                term_simplified: '合同',
                term_traditional: '合同',
                term_classical: '契約',
                pinyin: 'hé tong',
                english: 'Contract / Agreement',
                category: 'legal',
                example_simplified: '双方签署了长期合同。',
                example_traditional: '雙方簽署了長期合同。',
                example_classical: '雙方簽署長期之契約矣。',
                usage_context: 'Binding business agreement between parties',
                cultural_note: '合 (hé) = combine; 同 (tóng) = same/together'
              },
              {
                term_simplified: '发票',
                term_traditional: '發票',
                term_classical: '發票據',
                pinyin: 'fā piào',
                english: 'Invoice',
                category: 'business_document',
                example_simplified: '请给我开一张发票。',
                example_traditional: '請給我開一張發票。',
                example_classical: '請與吾開一發票據。',
                usage_context: 'Official document detailing goods sold and payment due',
                cultural_note: '发 (fā) = issue/emit; 票 (piào) = ticket/receipt'
              },
              {
                term_simplified: '订单',
                term_traditional: '訂單',
                term_classical: '訂購單',
                pinyin: 'dìng dān',
                english: 'Purchase Order / Order',
                category: 'business_document',
                example_simplified: '我们收到了大额订单。',
                example_traditional: '我們收到了大額訂單。',
                example_classical: '吾等收得大額訂購單矣。',
                usage_context: 'Request to purchase goods or services',
                cultural_note: '订 (dìng) = order/reserve; 单 (dān) = sheet/form'
              }
            ]
          },
          {
            type: 'business_example',
            title: 'Trade Transaction Process',
            content: '典型的进出口流程：1)买方和卖方协商价格和条件；2)签署合同；3)买方支付预付款；4)卖方发货；5)买方收货并验收；6)支付尾款。| Typical import-export process: 1) Buyer and seller negotiate price and terms; 2) Sign contract; 3) Buyer pays deposit; 4) Seller ships goods; 5) Buyer receives and inspects; 6) Final payment. | 典型進出口流程：一、買方與賣方協商價格與條件；二、簽署契約；三、買方支預付款；四、賣方發貨；五、買方收貨及驗收；六、支尾款。'
          },
          {
            type: 'dialogue',
            title: 'Trade Negotiation',
            exchanges: [
              {
                speaker: 'Buyer',
                simplified: '我们想从你们公司进口产品。能提供发票吗？',
                traditional: '我們想從你們公司進口產品。能提供發票嗎？',
                classical: '吾等欲自爾公司進口産品。能提供發票乎？',
                pinyin: 'Wǒ men xiǎng cóng nǐ men gōng sī jìn kǒu chǎn pǐn. Néng tí gōng fā piào ma?',
                english: 'We want to import products from your company. Can you provide an invoice?'
              },
              {
                speaker: 'Seller',
                simplified: '当然可以。请先填写订单，说明数量和规格。',
                traditional: '當然可以。請先填寫訂單，說明數量和規格。',
                classical: '當然可也。請先填寫訂購單，說明數量與規格。',
                pinyin: 'Dāng rán kě yǐ. Qǐng xiān tián xiě dìng dān, shuō míng shù liàng hé guī gé.',
                english: 'Of course. Please fill out a purchase order first, specifying the quantity and specifications.'
              }
            ]
          }
        ]
      },
      {
        id: 'zho-biz-03',
        num: 3,
        title: 'Workplace Communication & Office Etiquette',
        duration: '14:00',
        topics: ['workplace_etiquette', 'professional_communication', 'business_culture'],
        sections: [
          {
            type: 'main_title',
            content: '职场沟通与办公礼仪 | 職場溝通與辦公禮儀 | Workplace Communication and Office Etiquette'
          },
          {
            type: 'vocabulary',
            title: 'Professional Communication Terms',
            vocabulary: [
              {
                term_simplified: '会议',
                term_traditional: '會議',
                term_classical: '會議',
                pinyin: 'huì yì',
                english: 'Meeting',
                category: 'workplace',
                example_simplified: '明天上午10点开会议。',
                example_traditional: '明天上午10點開會議。',
                example_classical: '明日上午十時開會議。',
                usage_context: 'Formal gathering to discuss business matters',
                cultural_note: '会 (huì) = gather; 议 (yì) = discuss'
              },
              {
                term_simplified: '邮件',
                term_traditional: '郵件',
                term_classical: '郵函',
                pinyin: 'yóu jiàn',
                english: 'Email / Mail',
                category: 'communication',
                example_simplified: '请发一份邮件确认时间。',
                example_traditional: '請發一份郵件確認時間。',
                example_classical: '請發一份郵函確認時間。',
                usage_context: 'Electronic or physical correspondence',
                cultural_note: '邮 (yóu) = mail; 件 (jiàn) = item/piece'
              },
              {
                term_simplified: '报告',
                term_traditional: '報告',
                term_classical: '報告',
                pinyin: 'bào gào',
                english: 'Report / To report',
                category: 'workplace',
                example_simplified: '我需要提交月度报告。',
                example_traditional: '我需要提交月度報告。',
                example_classical: '吾需提交月度報告。',
                usage_context: 'Formal presentation of information or findings',
                cultural_note: '报 (bào) = report/announce; 告 (gào) = tell'
              },
              {
                term_simplified: '截止日期',
                term_traditional: '截止日期',
                term_classical: '截止之期',
                pinyin: 'jiē zhǐ rì qī',
                english: 'Deadline',
                category: 'workplace',
                example_simplified: '项目的截止日期是下周五。',
                example_traditional: '項目的截止日期是下週五。',
                example_classical: '項目之截止期為下週五。',
                usage_context: 'Final date for completion of a task',
                cultural_note: '截止 (jiē zhǐ) = cutoff point; 日期 (rì qī) = date'
              }
            ]
          },
          {
            type: 'cultural_protocol',
            title: 'Business Meeting Etiquette',
            content: '中国职场礼仪强调尊重级别和等级制度。会议开始时，高级管理人员首先发言。与中国商业伙伴联系时，使用正式头衔。准时到达会议被视为对他人的尊重。送礼时避免数字4（象征死亡）和钟（象征死亡）。| Chinese business etiquette emphasizes respect for hierarchy and seniority. Senior management speaks first in meetings. Use formal titles when contacting Chinese business partners. Punctuality to meetings is a sign of respect. Avoid gifts of clocks (homophone for death) or items with the number 4. | 中國職場禮儀強調尊重級別與等級制度。會議開始時，高級管理人員首先發言。與中國商業夥伴聯絡時，使用正式頭銜。準時到達會議被視為對他人之尊重。送禮時避免數字4（象徵死亡）與鐘（象徵死亡）。'
          },
          {
            type: 'email_template',
            title: 'Professional Email Format',
            example: {
              greeting: '尊敬的李经理，| Respected Manager Li, | 尊敬的李經理，',
              body: '我想就项目进展情况向您报告。本月的工作已按计划完成。请在下周三前给予反馈。| I would like to report on the project progress. This month\'s work has been completed as planned. Please provide feedback by next Wednesday. | 我想就項目進展情況向您報告。本月的工作已按計畫完成。請在下週三前給予反饋。',
              closing: '此致敬礼，李红 | Best regards, Li Hong | 此致敬禮，李紅'
            }
          },
          {
            type: 'dialogue',
            title: 'Meeting Schedule Conversation',
            exchanges: [
              {
                speaker: 'Secretary',
                simplified: '李经理，我为你安排了明天下午3点的会议。',
                traditional: '李經理，我為你安排了明天下午3點的會議。',
                classical: '李經理，吾為爾安排明日下午三時之會議。',
                pinyin: 'Lǐ jīng lǐ, wǒ wéi nǐ ān pái le míng tiān xià wǔ 3 diǎn de huì yì.',
                english: 'Manager Li, I have arranged a meeting for you tomorrow at 3 PM.'
              },
              {
                speaker: 'Manager',
                simplified: '好的。请发邮件给所有参与者确认时间。',
                traditional: '好的。請發郵件給所有參與者確認時間。',
                classical: '好也。請發郵函給所有參與者確認時間。',
                pinyin: 'Hǎo de. Qǐng fā yóu jiàn gěi suǒ yǒu cān yù zhě què rèn shí jiān.',
                english: 'Good. Please send an email to all participants to confirm the time.'
              }
            ]
          }
        ]
      },
      {
        id: 'zho-biz-04',
        num: 4,
        title: 'Industry-Specific Terminology: Finance & Banking',
        duration: '16:00',
        topics: ['finance', 'banking', 'investment'],
        sections: [
          {
            type: 'main_title',
            content: '金融与银行专业术语 | 金融與銀行專業術語 | Finance and Banking Professional Terminology'
          },
          {
            type: 'vocabulary',
            title: 'Banking & Finance Terms',
            vocabulary: [
              {
                term_simplified: '存款',
                term_traditional: '存款',
                term_classical: '存銀',
                pinyin: 'cún kuǎn',
                english: 'Deposit / Savings',
                category: 'banking',
                example_simplified: '我在银行存了10万块钱。',
                example_traditional: '我在銀行存了10萬塊錢。',
                example_classical: '吾在銀行存十萬金錢。',
                usage_context: 'Money placed in a bank account',
                cultural_note: '存 (cún) = store/deposit; 款 (kuǎn) = money/fund'
              },
              {
                term_simplified: '贷款',
                term_traditional: '貸款',
                term_classical: '貸金',
                pinyin: 'dài kuǎn',
                english: 'Loan',
                category: 'banking',
                example_simplified: '他申请了房屋贷款。',
                example_traditional: '他申請了房屋貸款。',
                example_classical: '彼申請房屋貸金。',
                usage_context: 'Money borrowed from a bank with interest',
                cultural_note: '贷 (dài) = lend/loan; 款 (kuǎn) = money'
              },
              {
                term_simplified: '利息',
                term_traditional: '利息',
                term_classical: '利息',
                pinyin: 'lì xí',
                english: 'Interest',
                category: 'finance',
                example_simplified: '银行利息现在很低。',
                example_traditional: '銀行利息現在很低。',
                example_classical: '銀行利息今甚低矣。',
                usage_context: 'Money paid for borrowing or earned on deposits',
                cultural_note: '利 (lì) = profit/benefit; 息 (xí) = interest/breath'
              },
              {
                term_simplified: '投资',
                term_traditional: '投資',
                term_classical: '投資',
                pinyin: 'tóu zī',
                english: 'Investment',
                category: 'finance',
                example_simplified: '我计划投资房地产。',
                example_traditional: '我計畫投資房地產。',
                example_classical: '吾計畫投資房地產。',
                usage_context: 'Putting money into ventures to generate returns',
                cultural_note: '投 (tóu) = throw/invest; 资 (zī) = capital/fund'
              },
              {
                term_simplified: '股票',
                term_traditional: '股票',
                term_classical: '股權',
                pinyin: 'gǔ piào',
                english: 'Stock / Share',
                category: 'finance',
                example_simplified: '我拥有这家公司的股票。',
                example_traditional: '我擁有這家公司的股票。',
                example_classical: '吾擁有此公司之股權。',
                usage_context: 'Ownership share in a company',
                cultural_note: '股 (gǔ) = share/portion; 票 (piào) = certificate'
              }
            ]
          },
          {
            type: 'business_process',
            title: 'Loan Application Process',
            steps: [
              { step: 1, action: '准备文件', simplified: 'Prepare documents (ID, proof of income, bank statements)', classical: '準備文件' },
              { step: 2, action: '提交申请', simplified: 'Submit loan application', classical: '提交申請' },
              { step: 3, action: '银行审批', simplified: 'Bank review and approval', classical: '銀行審批' },
              { step: 4, action: '签署合同', simplified: 'Sign loan agreement', classical: '簽署契約' },
              { step: 5, action: '发放贷款', simplified: 'Funds disbursed', classical: '發放貸款' }
            ]
          },
          {
            type: 'dialogue',
            title: 'Bank Consultation',
            exchanges: [
              {
                speaker: 'Customer',
                simplified: '我想申请一个商业贷款。请问利息是多少？',
                traditional: '我想申請一個商業貸款。請問利息是多少？',
                classical: '吾欲申請商業貸款。請問利息若干？',
                pinyin: 'Wǒ xiǎng shēn qǐng yī ge shāng yè dài kuǎn. Qǐng wèn lì xí shì duō shao?',
                english: 'I want to apply for a business loan. What is the interest rate?'
              },
              {
                speaker: 'Bank Officer',
                simplified: '利息取决于贷款期限和你的信用记录。通常是年利率3%到7%。',
                traditional: '利息取決於貸款期限和你的信用記錄。通常是年利率3%到7%。',
                classical: '利息取決於貸款期限與爾之信用記錄。通常為年利率百分之三至七。',
                pinyin: 'Lì xí qǔ jué yú dài kuǎn qī xiàn hé nǐ de xìn yòng jì lù. Tōng cháng shì nián lì lǜ 3% dào 7%.',
                english: 'Interest depends on the loan term and your credit history. Usually between 3% to 7% annual rate.'
              }
            ]
          }
        ]
      },
      {
        id: 'zho-biz-05',
        num: 5,
        title: 'Negotiations & Sales Strategies',
        duration: '15:00',
        topics: ['negotiation', 'sales', 'persuasion'],
        sections: [
          {
            type: 'main_title',
            content: '商务谈判与销售策略 | 商務談判與銷售策略 | Business Negotiations and Sales Strategies'
          },
          {
            type: 'vocabulary',
            title: 'Negotiation Terminology',
            vocabulary: [
              {
                term_simplified: '议价',
                term_traditional: '議價',
                term_classical: '議價',
                pinyin: 'yì jià',
                english: 'Negotiate price / Bargain',
                category: 'negotiation',
                example_simplified: '我们可以议价。',
                example_traditional: '我們可以議價。',
                example_classical: '吾等可議價也。',
                usage_context: 'Discussing and adjusting price terms',
                cultural_note: '议 (yì) = discuss; 价 (jià) = price'
              },
              {
                term_simplified: '折扣',
                term_traditional: '折扣',
                term_classical: '折扣',
                pinyin: 'zhé kòu',
                english: 'Discount',
                category: 'sales',
                example_simplified: '如果批量订购，我们可以提供折扣。',
                example_traditional: '如果批量訂購，我們可以提供折扣。',
                example_classical: '若批量訂購，吾等可提供折扣。',
                usage_context: 'Reduction in price for bulk purchases',
                cultural_note: '折 (zhé) = discount/break; 扣 (kòu) = deduct'
              },
              {
                term_simplified: '佣金',
                term_traditional: '佣金',
                term_classical: '佣金',
                pinyin: 'yōng jīn',
                english: 'Commission',
                category: 'sales',
                example_simplified: '销售人员可以获得佣金。',
                example_traditional: '銷售人員可以獲得佣金。',
                example_classical: '銷售人員可獲佣金。',
                usage_context: 'Payment based on percentage of sales',
                cultural_note: '佣 (yōng) = employment/fee; 金 (jīn) = money'
              },
              {
                term_simplified: '条件',
                term_traditional: '條件',
                term_classical: '條件',
                pinyin: 'tiáo jiàn',
                english: 'Terms / Conditions',
                category: 'negotiation',
                example_simplified: '我们需要讨论交付条件。',
                example_traditional: '我們需要討論交付條件。',
                example_classical: '吾等需討論交付之條件。',
                usage_context: 'Specific requirements or provisions',
                cultural_note: '条 (tiáo) = item/clause; 件 (jiàn) = matter/piece'
              }
            ]
          },
          {
            type: 'persuasion_techniques',
            title: 'Sales Persuasion Phrases',
            phrases: [
              { simplified: '这是一个绝好的机会', traditional: '這是一個絕好的機會', english: 'This is an exceptional opportunity', pinyin: 'zhè shì yī ge jué hǎo de jī huì' },
              { simplified: '现在就下单可以获得特别折扣', traditional: '現在就下單可以獲得特別折扣', english: 'Place your order now for special discounts', pinyin: 'xiàn zài jiù xià dān kě yǐ huò dé tè bié zhé kòu' },
              { simplified: '我们的产品质量是业界最好的', traditional: '我們的產品質量是業界最好的', english: 'Our product quality is the best in the industry', pinyin: 'wǒ men de chǎn pǐn zhì liàng shì yè jiè zuì hǎo de' }
            ]
          },
          {
            type: 'dialogue',
            title: 'Price Negotiation',
            exchanges: [
              {
                speaker: 'Buyer',
                simplified: '你的价格太高了。能不能降价？',
                traditional: '你的價格太高了。能不能降價？',
                classical: '爾之價格太高矣。能降價乎？',
                pinyin: 'Nǐ de jià gé tài gāo le. Néng bu néng jiàng jià?',
                english: 'Your price is too high. Can you lower it?'
              },
              {
                speaker: 'Seller',
                simplified: '如果你订购数量大，我可以提供折扣。最低可以打9折。',
                traditional: '如果你訂購數量大，我可以提供折扣。最低可以打9折。',
                classical: '若爾訂購數量大，吾可提供折扣。最低可打九折。',
                pinyin: 'Rú guǒ nǐ dìng gòu shù liàng dà, wǒ kě yǐ tí gōng zhé kòu. Zuì dī kě yǐ dǎ jiǔ zhé.',
                english: 'If you order a large quantity, I can offer a discount. At most, I can give a 10% discount.'
              }
            ]
          }
        ]
      }
    ]
  },

  // ========== DOMAIN 2: ACADEMIC & CULTURAL (15 LECTURES) ==========
  academic: {
    domain: 'Academic & Cultural Studies',
    totalLectures: 15,
    lectures: [
      {
        id: 'zho-aca-01',
        num: 6,
        title: 'Advanced Literary Terminology & Classical Chinese',
        duration: '17:00',
        topics: ['literature', 'classical_chinese', 'literary_analysis'],
        sections: [
          {
            type: 'main_title',
            content: '高级文学术语与古典中文 | 高級文學術語與古典中文 | Advanced Literary Terminology and Classical Chinese'
          },
          {
            type: 'vocabulary',
            title: 'Literary Analysis Terms',
            vocabulary: [
              {
                term_simplified: '隐喻',
                term_traditional: '隱喻',
                term_classical: '喻意',
                pinyin: 'yǐn yù',
                english: 'Metaphor / Implied meaning',
                category: 'literature',
                example_simplified: '"人生如戏"是一个隐喻。',
                example_traditional: '「人生如戲」是一個隱喻。',
                example_classical: '「人生如戲」乃喻意也。',
                usage_context: 'Figurative comparison without using "like" or "as"',
                cultural_note: '隐 (yǐn) = hidden; 喻 (yù) = metaphor/explain'
              },
              {
                term_simplified: '象征',
                term_traditional: '象徵',
                term_classical: '象徵',
                pinyin: 'xiàng zh征',
                english: 'Symbol / Symbolism',
                category: 'literature',
                example_simplified: '白鸽象征和平。',
                example_traditional: '白鴿象徵和平。',
                example_classical: '白鴿象徵和平。',
                usage_context: 'Using objects/images to represent abstract concepts',
                cultural_note: '象 (xiàng) = image/symbol; 征 (zh征) = sign'
              },
              {
                term_simplified: '讽刺',
                term_traditional: '諷刺',
                term_classical: '譏諷',
                pinyin: 'fěng cì',
                english: 'Irony / Sarcasm',
                category: 'literature',
                example_simplified: '这部小说充满了讽刺。',
                example_traditional: '這部小說充滿了諷刺。',
                example_classical: '此部小說充滿譏諷。',
                usage_context: 'Expression that intends to mean the opposite',
                cultural_note: '讽 (fěng) = satirize; 刺 (cì) = prick/criticize'
              },
              {
                term_simplified: '修辞',
                term_traditional: '修辭',
                term_classical: '辭修',
                pinyin: 'xiū cí',
                english: 'Rhetoric / Rhetorical device',
                category: 'literature',
                example_simplified: '作者使用了多种修辞手法。',
                example_traditional: '作者使用了多種修辭手法。',
                example_classical: '作者使用多種辭修手法。',
                usage_context: 'Techniques of language use for effect',
                cultural_note: '修 (xiū) = cultivate; 辞 (cí) = words/rhetoric'
              }
            ]
          },
          {
            type: 'literary_forms',
            title: 'Classical Chinese Literary Forms',
            forms: [
              {
                name: '诗 (Poetry)',
                simplified: '古典诗歌通常有严格的韵律和字数。常见形式：五言（每句5字）和七言（每句7字）。',
                traditional: '古典詩歌通常有嚴格的韻律和字數。常見形式：五言（每句5字）和七言（每句7字）。',
                classical: '古典詩歌通常有嚴格之韻律與字數。常見形式：五言（每句五字）與七言（每句七字）。',
                example: '唐诗、宋诗'
              },
              {
                name: '词 (Ci Poetry)',
                simplified: '词是一种音乐文学形式，字数不固定，节奏复杂。常见于宋朝。',
                traditional: '詞是一種音樂文學形式，字數不固定，節奏複雜。常見於宋朝。',
                classical: '詞乃一種音樂文學形式，字數不固定，節奏複雜。常見於宋代。',
                example: '蘇東坡、李清照'
              },
              {
                name: '文言文 (Classical Chinese Prose)',
                simplified: '文言文是古代汉语的书面形式，语法和现代汉语差异大。常用于历史文献和古籍。',
                traditional: '文言文是古代漢語的書面形式，語法和現代漢語差異大。常用於歷史文獻和古籍。',
                classical: '文言文乃古代漢語之書面形式，語法與現代漢語差異甚大。常用於歷史文獻與古籍。',
                example: '《論語》《史記》《資治通鑑》'
              }
            ]
          },
          {
            type: 'classical_examples',
            title: 'Famous Classical Passages',
            examples: [
              {
                title: '子曰 (Confucius said)',
                classical: '子曰：「學而時習之，不亦說乎？有朋自遠方來，不亦樂乎？」',
                simplified: '孔子说：「学习知识，经常练习它，这不也是很高兴的事吗？有朋友从远方来，这不也是很快乐的事吗？」',
                traditional: '孔子說：「學習知識，經常練習它，這不也是很高興的事嗎？有朋友從遠方來，這不也是很快樂的事嗎？」'
              }
            ]
          },
          {
            type: 'analysis_framework',
            title: 'Literary Analysis Framework',
            framework: '分析古典文学时，考虑以下方面：1)背景和历史时期；2)作者生平；3)主题和中心思想；4)修辞手法；5)文学价值和影响。| When analyzing classical literature, consider: 1) Historical background and period; 2) Author\'s biography; 3) Themes and main ideas; 4) Rhetorical devices; 5) Literary value and influence. | 分析古典文學時，考慮以下方面：一、背景與歷史時期；二、作者生平；三、主題與中心思想；四、修辭手法；五、文學價值與影響。'
          }
        ]
      },
      {
        id: 'zho-aca-02',
        num: 7,
        title: 'Philosophy & Ethical Concepts',
        duration: '16:00',
        topics: ['philosophy', 'ethics', 'confucianism', 'taoism'],
        sections: [
          {
            type: 'main_title',
            content: '中国哲学与伦理观念 | 中國哲學與倫理觀念 | Chinese Philosophy and Ethical Concepts'
          },
          {
            type: 'vocabulary',
            title: 'Philosophical Terms',
            vocabulary: [
              {
                term_simplified: '仁',
                term_traditional: '仁',
                term_classical: '仁',
                pinyin: 'rén',
                english: 'Humaneness / Benevolence (Core Confucian virtue)',
                category: 'philosophy',
                example_simplified: '儒家强调仁的重要性。',
                example_traditional: '儒家強調仁的重要性。',
                example_classical: '儒家強調仁之重要。',
                usage_context: 'The highest Confucian virtue; encompasses compassion and righteousness',
                cultural_note: '仁 (rén) = humanity/benevolence; fundamental to Confucian ethics'
              },
              {
                term_simplified: '义',
                term_traditional: '義',
                term_classical: '義',
                pinyin: 'yì',
                english: 'Righteousness / Justice',
                category: 'philosophy',
                example_simplified: '坚持正义是一种美德。',
                example_traditional: '堅持正義是一種美德。',
                example_classical: '堅持正義乃一種美德。',
                usage_context: 'Doing what is morally right, even at personal cost',
                cultural_note: '义 (yì) = righteousness; often paired with 仁 (rén)'
              },
              {
                term_simplified: '道',
                term_traditional: '道',
                term_classical: '道',
                pinyin: 'dào',
                english: 'The Way / The Path (Taoist concept)',
                category: 'philosophy',
                example_simplified: '道家寻求与自然和谐。',
                example_traditional: '道家尋求與自然和諧。',
                example_classical: '道家尋求與自然和諧。',
                usage_context: 'The fundamental nature of reality; beyond description',
                cultural_note: '道 (dào) = way/path; central concept in Taoism and all Chinese philosophy'
              },
              {
                term_simplified: '阴阳',
                term_traditional: '陰陽',
                term_classical: '陰陽',
                pinyin: 'yīn yáng',
                english: 'Yin-Yang / Dual opposing forces in balance',
                category: 'philosophy',
                example_simplified: '阴阳代表宇宙中的对立和统一。',
                example_traditional: '陰陽代表宇宙中的對立和統一。',
                example_classical: '陰陽代表宇宙之對立與統一。',
                usage_context: 'Cosmic duality: light/dark, male/female, active/passive',
                cultural_note: '阴 (yīn) = dark/passive; 阳 (yáng) = light/active'
              }
            ]
          },
          {
            type: 'philosophical_schools',
            title: 'Major Chinese Philosophical Schools',
            schools: [
              {
                name: '儒家 (Confucianism)',
                simplified: '儒家强调人伦、礼仪和道德修养。核心价值：仁、义、礼、智、信（五常）。',
                traditional: '儒家強調人倫、禮儀和道德修養。核心價值：仁、義、禮、智、信（五常）。',
                classical: '儒家強調人倫、禮儀與道德修養。核心價值：仁、義、禮、智、信（五常）。'
              },
              {
                name: '道家 (Taoism)',
                simplified: '道家主张顺应自然，避免强制和人为干预。强调简朴、谦逊和"无为而治"。',
                traditional: '道家主張順應自然，避免強制和人為干預。強調簡樸、謙遜和「無為而治」。',
                classical: '道家主張順應自然，避免強制與人為干預。強調簡樸、謙遜與「無為而治」。'
              },
              {
                name: '佛教 (Buddhism - Chinese adaptation)',
                simplified: '虽然起源于印度，但佛教在中国发展成了独特形式。强调修为、冥想和精神解脱。',
                traditional: '雖然起源於印度，但佛教在中國發展成了獨特形式。強調修為、冥想和精神解脫。',
                classical: '雖然起源於印度，但佛教在中國發展成獨特形式。強調修為、冥想與精神解脫。'
              }
            ]
          },
          {
            type: 'ethics_discussion',
            title: 'Key Ethical Questions',
            questions: [
              { question: '什么是最高的道德？(What is the highest virtue?)', pinyin: 'shén me shì zuì gāo de dào dé?' },
              { question: '人应该如何对待他人？(How should one treat others?)', pinyin: 'rén yīng gāi rú hé duì dài tā rén?' },
              { question: '政府的责任是什么？(What is the government\'s responsibility?)', pinyin: 'zhèng fǔ de zé rèn shì shén me?' }
            ]
          },
          {
            type: 'dialogue',
            title: 'Philosophical Discussion',
            exchanges: [
              {
                speaker: 'Student',
                simplified: '什么是仁？',
                traditional: '什麼是仁？',
                classical: '何為仁？',
                pinyin: 'Shén me shì rén?',
                english: 'What is humaneness/benevolence?'
              },
              {
                speaker: 'Teacher',
                simplified: '仁是对他人的同情和关爱。一个有仁心的人会帮助他人，不会伤害任何人。',
                traditional: '仁是對他人的同情和關愛。一個有仁心的人會幫助他人，不會傷害任何人。',
                classical: '仁乃對他人之同情與關愛。有仁心之人會幫助他人，不會傷害任何人。',
                pinyin: 'Rén shì duì tā rén de tóng qíng hé guān ài. Yī ge yǒu rén xīn de rén huì bāng zhù tā rén, búhuì shāng hài rèn hé rén.',
                english: 'Humaneness is compassion and care for others. A person with humaneness will help others and never cause harm.'
              }
            ]
          }
        ]
      },
      {
        id: 'zho-aca-03',
        num: 8,
        title: 'History & Historiography',
        duration: '15:00',
        topics: ['history', 'historiography', 'historical_analysis'],
        sections: [
          {
            type: 'main_title',
            content: '历史与史学 | 歷史與史學 | History and Historiography'
          },
          {
            type: 'vocabulary',
            title: 'Historical Terminology',
            vocabulary: [
              {
                term_simplified: '朝代',
                term_traditional: '朝代',
                term_classical: '朝代',
                pinyin: 'cháo dài',
                english: 'Dynasty',
                category: 'history',
                example_simplified: '汉朝是中国历史上重要的朝代。',
                example_traditional: '漢朝是中國歷史上重要的朝代。',
                example_classical: '漢朝乃中國歷史上重要之朝代。',
                usage_context: 'A succession of rulers from the same family',
                cultural_note: '朝 (cháo) = dynasty; 代 (dài) = generation'
              },
              {
                term_simplified: '皇帝',
                term_traditional: '皇帝',
                term_classical: '皇帝',
                pinyin: 'huáng dì',
                english: 'Emperor',
                category: 'history',
                example_simplified: '唐朝有许多伟大的皇帝。',
                example_traditional: '唐朝有許多偉大的皇帝。',
                example_classical: '唐朝有許多偉大之皇帝。',
                usage_context: 'Monarch; supreme ruler',
                cultural_note: '皇 (huáng) = imperial; 帝 (dì) = emperor'
              },
              {
                term_simplified: '文明',
                term_traditional: '文明',
                term_classical: '文明',
                pinyin: 'wén míng',
                english: 'Civilization',
                category: 'history',
                example_simplified: '中华文明有五千年的历史。',
                example_traditional: '中華文明有五千年的歷史。',
                example_classical: '中華文明有五千年之歷史。',
                usage_context: 'Advanced stage of human social development',
                cultural_note: '文 (wén) = culture/civilization; 明 (míng) = bright/clear'
              }
            ]
          },
          {
            type: 'historical_periods',
            title: 'Major Chinese Dynasties',
            periods: [
              { name: '秦朝 (Qin Dynasty)', dates: '221-206 BCE', simplified: '第一个统一中国的朝代，建立了集中制度。', traditional: '第一個統一中國的朝代，建立了集中制度。' },
              { name: '汉朝 (Han Dynasty)', dates: '206 BCE - 220 CE', simplified: '建立了儒家思想的政治体系，扩展了丝绸之路。', traditional: '建立了儒家思想的政治體系，擴展了絲綢之路。' },
              { name: '唐朝 (Tang Dynasty)', dates: '618-907', simplified: '文化、艺术和经济的黄金时代。', traditional: '文化、藝術和經濟的黃金時代。' },
              { name: '宋朝 (Song Dynasty)', dates: '960-1279', simplified: '科技和文化的高度发展，发明了火药。', traditional: '科技和文化的高度發展，發明了火藥。' }
            ]
          },
          {
            type: 'historiography_methods',
            title: 'Historical Research Methods',
            methods: [
              { method: '文献研究 (Textual Research)', description: '研究古籍、历史文献和记录', traditional: '研究古籍、歷史文獻和記錄' },
              { method: '考古 (Archaeology)', description: '通过发掘遗迹来了解过去', traditional: '通過發掘遺跡來了解過去' },
              { method: '比较历史学 (Comparative History)', description: '比较不同文明和时期的相似性和差异', traditional: '比較不同文明和時期的相似性和差異' }
            ]
          }
        ]
      }
    ]
  },

  // ========== DOMAIN 3: TECHNOLOGY & IT (10 LECTURES) ==========
  technology: {
    domain: 'Technology & IT',
    totalLectures: 10,
    lectures: [
      {
        id: 'zho-tech-01',
        num: 16,
        title: 'Information Technology Terminology',
        duration: '14:00',
        topics: ['IT', 'computer_science', 'programming'],
        sections: [
          {
            type: 'main_title',
            content: '信息技术术语 | 信息技術術語 | Information Technology Terminology'
          },
          {
            type: 'vocabulary',
            title: 'IT & Computing Terms',
            vocabulary: [
              {
                term_simplified: '软件',
                term_traditional: '軟件',
                term_classical: '軟件',
                pinyin: 'ruǎn jiàn',
                english: 'Software',
                category: 'IT',
                example_simplified: '这个软件用来编辑视频。',
                example_traditional: '這個軟件用來編輯視頻。',
                example_classical: '此軟件用來編輯視頻。',
                usage_context: 'Programs and operating systems',
                cultural_note: '软 (ruǎn) = soft; 件 (jiàn) = piece/component'
              },
              {
                term_simplified: '硬件',
                term_traditional: '硬件',
                term_classical: '硬件',
                pinyin: 'yìng jiàn',
                english: 'Hardware',
                category: 'IT',
                example_simplified: '电脑的硬件包括处理器、内存和硬盘。',
                example_traditional: '電腦的硬件包括處理器、內存和硬盤。',
                example_classical: '電腦之硬件包括處理器、內存與硬盤。',
                usage_context: 'Physical computer components',
                cultural_note: '硬 (yìng) = hard; 件 (jiàn) = piece'
              },
              {
                term_simplified: '数据库',
                term_traditional: '數據庫',
                term_classical: '數據庫',
                pinyin: 'shù jù kù',
                english: 'Database',
                category: 'IT',
                example_simplified: '这个公司管理着一个大型数据库。',
                example_traditional: '這個公司管理著一個大型數據庫。',
                example_classical: '此公司管理著一大型數據庫。',
                usage_context: 'Organized collection of structured data',
                cultural_note: '数据 (shù jù) = data; 库 (kù) = storehouse/warehouse'
              },
              {
                term_simplified: '网络',
                term_traditional: '網絡',
                term_classical: '網絡',
                pinyin: 'wǎng luò',
                english: 'Network / Internet',
                category: 'IT',
                example_simplified: '互联网连接了世界各地的计算机。',
                example_traditional: '互聯網連接了世界各地的計算機。',
                example_classical: '互聯網連接世界各地之計算機。',
                usage_context: 'Connected system of computers',
                cultural_note: '网 (wǎng) = net; 络 (luò) = connection'
              },
              {
                term_simplified: '云计算',
                term_traditional: '雲計算',
                term_classical: '雲計算',
                pinyin: 'yún jì suàn',
                english: 'Cloud Computing',
                category: 'IT',
                example_simplified: '云计算允许用户从任何地方访问数据。',
                example_traditional: '雲計算允許用戶從任何地方訪問數據。',
                example_classical: '雲計算允許用戶自任何地訪問數據。',
                usage_context: 'On-demand computing resources delivered over internet',
                cultural_note: '云 (yún) = cloud; 计算 (jì suàn) = computing'
              }
            ]
          },
          {
            type: 'dialogue',
            title: 'Tech Support Conversation',
            exchanges: [
              {
                speaker: 'User',
                simplified: '我的电脑运行很慢。可能是什么问题？',
                traditional: '我的電腦運行很慢。可能是什麼問題？',
                classical: '吾之電腦運行甚慢。可能何問題？',
                pinyin: 'Wǒ de diàn nǎo yùn xíng hěn màn. Kě néng shì shén me wèn tí?',
                english: 'My computer runs slowly. What could be the problem?'
              },
              {
                speaker: 'Tech Support',
                simplified: '可能是硬盘空间不足或者软件太多。建议你清理硬盘并卸载不需要的软件。',
                traditional: '可能是硬盤空間不足或者軟件太多。建議你清理硬盤並卸載不需要的軟件。',
                classical: '可能是硬盤空間不足或軟件太多。建議爾清理硬盤並卸載不需要之軟件。',
                pinyin: 'Kě néng shì yìng pán kōng jiān búzú huò zhě ruǎn jiàn tài duō. Jiàn yì nǐ qīng lǐ yìng pán bìng xiè zài búxū yào de ruǎn jiàn.',
                english: 'It could be insufficient hard disk space or too much software. I suggest you clean your hard drive and uninstall unnecessary programs.'
              }
            ]
          }
        ]
      },
      {
        id: 'zho-tech-02',
        num: 17,
        title: 'Digital Communication & Social Media Language',
        duration: '13:00',
        topics: ['digital_communication', 'social_media', 'internet_culture'],
        sections: [
          {
            type: 'main_title',
            content: '数字通信与社交媒体语言 | 數字通信與社交媒體語言 | Digital Communication and Social Media Language'
          },
          {
            type: 'vocabulary',
            title: 'Digital & Social Media Terms',
            vocabulary: [
              {
                term_simplified: '直播',
                term_traditional: '直播',
                term_classical: '直播',
                pinyin: 'zhí bō',
                english: 'Live streaming',
                category: 'social_media',
                example_simplified: '很多人在直播平台上看直播。',
                example_traditional: '很多人在直播平台上看直播。',
                example_classical: '很多人在直播平臺上看直播。',
                usage_context: 'Real-time transmission of audio/video content',
                cultural_note: '直 (zhí) = direct; 播 (bō) = broadcast'
              },
              {
                term_simplified: '粉丝',
                term_traditional: '粉絲',
                term_classical: '粉絲',
                pinyin: 'fěn sī',
                english: 'Fans / Followers',
                category: 'social_media',
                example_simplified: '这个明星有数百万粉丝。',
                example_traditional: '這個明星有數百萬粉絲。',
                example_classical: '此明星有數百萬粉絲。',
                usage_context: 'People who follow and support a celebrity or content creator',
                cultural_note: '粉丝 (fěn sī) = fans; literally "noodles threads"'
              },
              {
                term_simplified: '点赞',
                term_traditional: '點贊',
                term_classical: '點贊',
                pinyin: 'diǎn zàn',
                english: 'Like / Thumb up',
                category: 'social_media',
                example_simplified: '我点赞了你的帖子。',
                example_traditional: '我點贊了你的帖子。',
                example_classical: '吾點贊爾之帖子。',
                usage_context: 'Expression of approval on social media',
                cultural_note: '点 (diǎn) = click/tap; 赞 (zàn) = praise'
              },
              {
                term_simplified: '转发',
                term_traditional: '轉發',
                term_classical: '轉發',
                pinyin: 'zhuǎn fā',
                english: 'Share / Repost',
                category: 'social_media',
                example_simplified: '我转发了这个有趣的视频。',
                example_traditional: '我轉發了這個有趣的視頻。',
                example_classical: '吾轉發此有趣之視頻。',
                usage_context: 'Sharing content from another user',
                cultural_note: '转 (zhuǎn) = transfer; 发 (fā) = send/post'
              }
            ]
          },
          {
            type: 'internet_slang',
            title: 'Modern Internet Slang & Abbreviations',
            slang: [
              { simplified: '666', meaning: 'Wow! Amazing! (from video game/internet culture)', pinyin: 'liù liù liù' },
              { simplified: '鸡汤', traditional: '雞湯', meaning: 'Chicken soup for the soul; inspirational but shallow advice', pinyin: 'jī tāng' },
              { simplified: '微博', traditional: '微博', meaning: 'Weibo (microblog/Chinese Twitter)', pinyin: 'wēi bó' },
              { simplified: '弹幕', traditional: '彈幕', meaning: 'Bullet comments (scrolling comments in videos)', pinyin: 'tán mù' }
            ]
          },
          {
            type: 'dialogue',
            title: 'Social Media Interaction',
            exchanges: [
              {
                speaker: 'User 1',
                simplified: '你看到我的新视频了吗？',
                traditional: '你看到我的新視頻了嗎？',
                classical: '爾看得吾之新視頻矣乎？',
                pinyin: 'Nǐ kàn dào wǒ de xīn shì pín le ma?',
                english: 'Did you see my new video?'
              },
              {
                speaker: 'User 2',
                simplified: '看到了！我给你点赞了。能分享一下你的创意吗？',
                traditional: '看到了！我給你點贊了。能分享一下你的創意嗎？',
                classical: '看得矣！吾與爾點贊矣。能分享一下爾之創意乎？',
                pinyin: 'Kàn dào le! Wǒ gěi nǐ diǎn zàn le. Néng fēn xiǎng yī xià nǐ de chuàng yì ma?',
                english: 'I did! I liked it. Can you share how you came up with the idea?'
              }
            ]
          }
        ]
      }
    ]
  },

  // ========== DOMAIN 4: MEDICAL & SCIENCE (10 LECTURES) ==========
  medical: {
    domain: 'Medical & Science',
    totalLectures: 10,
    lectures: [
      {
        id: 'zho-med-01',
        num: 26,
        title: 'Medical Terminology & Healthcare Communication',
        duration: '16:00',
        topics: ['medicine', 'healthcare', 'symptoms', 'treatment'],
        sections: [
          {
            type: 'main_title',
            content: '医学术语与医疗沟通 | 醫學術語與醫療溝通 | Medical Terminology and Healthcare Communication'
          },
          {
            type: 'vocabulary',
            title: 'Medical Terms',
            vocabulary: [
              {
                term_simplified: '症状',
                term_traditional: '症狀',
                term_classical: '症狀',
                pinyin: 'zhèng zhuàng',
                english: 'Symptom',
                category: 'medicine',
                example_simplified: '他有发烧和咳嗽的症状。',
                example_traditional: '他有發燒和咳嗽的症狀。',
                example_classical: '彼有發燒與咳嗽之症狀。',
                usage_context: 'Physical manifestation of illness',
                cultural_note: '症 (zhèng) = disease; 状 (zhuàng) = condition'
              },
              {
                term_simplified: '治疗',
                term_traditional: '治療',
                term_classical: '治療',
                pinyin: 'zhì liáo',
                english: 'Treatment / Therapy',
                category: 'medicine',
                example_simplified: '医生制定了一个治疗计划。',
                example_traditional: '醫生制定了一個治療計畫。',
                example_classical: '醫生制定治療之計畫。',
                usage_context: 'Medical care to cure or manage disease',
                cultural_note: '治 (zhì) = treat/manage; 疗 (liáo) = therapy'
              },
              {
                term_simplified: '诊断',
                term_traditional: '診斷',
                term_classical: '診斷',
                pinyin: 'zhěn duàn',
                english: 'Diagnosis',
                category: 'medicine',
                example_simplified: '医生进行了诊断。',
                example_traditional: '醫生進行了診斷。',
                example_classical: '醫生進行診斷。',
                usage_context: 'Identification of disease or condition',
                cultural_note: '诊 (zhěn) = examine; 断 (duàn) = judge/determine'
              },
              {
                term_simplified: '处方',
                term_traditional: '處方',
                term_classical: '處方',
                pinyin: 'chǔ fāng',
                english: 'Prescription',
                category: 'medicine',
                example_simplified: '医生给我开了处方。',
                example_traditional: '醫生給我開了處方。',
                example_classical: '醫生予吾開處方。',
                usage_context: 'Medical instruction for medication use',
                cultural_note: '处 (chǔ) = deal with; 方 (fāng) = method/formula'
              },
              {
                term_simplified: '药物',
                term_traditional: '藥物',
                term_classical: '藥物',
                pinyin: 'yào wù',
                english: 'Medicine / Drug',
                category: 'medicine',
                example_simplified: '这种药物可以缓解疼痛。',
                example_traditional: '這種藥物可以緩解疼痛。',
                example_classical: '此種藥物可緩解疼痛。',
                usage_context: 'Substance used for medical treatment',
                cultural_note: '药 (yào) = medicine; 物 (wù) = thing'
              }
            ]
          },
          {
            type: 'doctor_patient_dialogue',
            title: 'Doctor-Patient Consultation',
            exchanges: [
              {
                speaker: 'Patient',
                simplified: '医生，我最近感觉很疲劳，还有头疼。',
                traditional: '醫生，我最近感覺很疲勞，還有頭疼。',
                classical: '醫生，吾最近感覺甚疲勞，還有頭疼。',
                pinyin: 'Yī sheng, wǒ zuì jìn gǎn jué hěn píláo, háishi yǒu tóu téng.',
                english: 'Doctor, I\'ve been feeling very tired recently and have a headache.'
              },
              {
                speaker: 'Doctor',
                simplified: '让我检查一下。你的症状多久了？',
                traditional: '讓我檢查一下。你的症狀多久了？',
                classical: '讓吾檢查一下。爾之症狀多久矣？',
                pinyin: 'Ràng wǒ jiǎn chá yī xià. Nǐ de zhèng zhuàng duō jiǔ le?',
                english: 'Let me examine you. How long have you had these symptoms?'
              },
              {
                speaker: 'Patient',
                simplified: '大约一周了。',
                traditional: '大約一週了。',
                classical: '大約一週矣。',
                pinyin: 'Dà yuē yī zhōu le.',
                english: 'About a week.'
              },
              {
                speaker: 'Doctor',
                simplified: '我建议你做一些血液检查。根据结果，我会给你开处方。',
                traditional: '我建議你做一些血液檢查。根據結果，我會給你開處方。',
                classical: '吾建議爾做一些血液檢查。根據結果，吾會予爾開處方。',
                pinyin: 'Wǒ jiàn yì nǐ zuò yī xiē xuè yè jiǎn chá. Gēn jù jié guǒ, wǒ huì gěi nǐ kāi chǔ fāng.',
                english: 'I recommend you take a blood test. Based on the results, I\'ll give you a prescription.'
              }
            ]
          },
          {
            type: 'health_advice',
            title: 'Common Health Advice',
            advice: [
              { simplified: '多喝水', traditional: '多喝水', meaning: 'Drink more water', pinyin: 'duō hē shuǐ' },
              { simplified: '充足睡眠', traditional: '充足睡眠', meaning: 'Get enough sleep', pinyin: 'chōng zú shuì miián' },
              { simplified: '定期锻炼', traditional: '定期鍛煉', meaning: 'Exercise regularly', pinyin: 'dìng qī duàn liàn' },
              { simplified: '避免压力', traditional: '避免壓力', meaning: 'Avoid stress', pinyin: 'bì miǎn yā lì' }
            ]
          }
        ]
      },
      {
        id: 'zho-med-02',
        num: 27,
        title: 'Scientific Research & Laboratory Terminology',
        duration: '15:00',
        topics: ['science', 'research', 'laboratory', 'experiment'],
        sections: [
          {
            type: 'main_title',
            content: '科学研究与实验室术语 | 科學研究與實驗室術語 | Scientific Research and Laboratory Terminology'
          },
          {
            type: 'vocabulary',
            title: 'Research & Lab Terms',
            vocabulary: [
              {
                term_simplified: '实验',
                term_traditional: '實驗',
                term_classical: '實驗',
                pinyin: 'shí yàn',
                english: 'Experiment',
                category: 'science',
                example_simplified: '我们在实验室进行了一个实验。',
                example_traditional: '我們在實驗室進行了一個實驗。',
                example_classical: '吾等在實驗室進行一實驗。',
                usage_context: 'Scientific procedure to test hypothesis',
                cultural_note: '实 (shí) = real/actual; 验 (yàn) = test'
              },
              {
                term_simplified: '假设',
                term_traditional: '假設',
                term_classical: '假設',
                pinyin: 'jiǎ shè',
                english: 'Hypothesis / Assumption',
                category: 'science',
                example_simplified: '研究者提出了一个新假设。',
                example_traditional: '研究者提出了一個新假設。',
                example_classical: '研究者提出新假設。',
                usage_context: 'Proposed explanation based on limited evidence',
                cultural_note: '假 (jiǎ) = false/assumed; 设 (shè) = set up'
              },
              {
                term_simplified: '数据',
                term_traditional: '數據',
                term_classical: '數據',
                pinyin: 'shù jù',
                english: 'Data',
                category: 'science',
                example_simplified: '收集数据是研究的重要部分。',
                example_traditional: '收集數據是研究的重要部分。',
                example_classical: '收集數據乃研究之重要部分。',
                usage_context: 'Factual information used as basis for analysis',
                cultural_note: '数 (shù) = number; 据 (jù) = according to'
              }
            ]
          }
        ]
      }
    ]
  },

  // ========== DOMAIN 5: MEDIA & JOURNALISM (10 LECTURES) ==========
  media: {
    domain: 'Media & Journalism',
    totalLectures: 10,
    lectures: [
      {
        id: 'zho-med-01',
        num: 36,
        title: 'News & Journalism Terminology',
        duration: '15:00',
        topics: ['journalism', 'news', 'media', 'reporting'],
        sections: [
          {
            type: 'main_title',
            content: '新闻与新闻学术语 | 新聞與新聞學術語 | News and Journalism Terminology'
          },
          {
            type: 'vocabulary',
            title: 'Journalism Terms',
            vocabulary: [
              {
                term_simplified: '记者',
                term_traditional: '記者',
                term_classical: '記者',
                pinyin: 'jì zhě',
                english: 'Journalist / Reporter',
                category: 'journalism',
                example_simplified: '记者采访了事件的目击者。',
                example_traditional: '記者採訪了事件的目擊者。',
                example_classical: '記者採訪事件之目擊者。',
                usage_context: 'Person who gathers and reports news',
                cultural_note: '记 (jì) = record; 者 (zhě) = person'
              },
              {
                term_simplified: '新闻',
                term_traditional: '新聞',
                term_classical: '新聞',
                pinyin: 'xīn wén',
                english: 'News',
                category: 'journalism',
                example_simplified: '今天的新闻很有趣。',
                example_traditional: '今天的新聞很有趣。',
                example_classical: '今日之新聞很有趣。',
                usage_context: 'Information about recent events',
                cultural_note: '新 (xīn) = new; 闻 (wén) = news/heard'
              },
              {
                term_simplified: '采访',
                term_traditional: '採訪',
                term_classical: '採訪',
                pinyin: 'cǎi fǎng',
                english: 'Interview / To interview',
                category: 'journalism',
                example_simplified: '记者采访了市长。',
                example_traditional: '記者採訪了市長。',
                example_classical: '記者採訪市長。',
                usage_context: 'Conversation with someone to obtain information',
                cultural_note: '采 (cǎi) = gather; 访 (fǎng) = visit/interview'
              },
              {
                term_simplified: '报道',
                term_traditional: '報道',
                term_classical: '報道',
                pinyin: 'bào dào',
                english: 'Report / To report',
                category: 'journalism',
                example_simplified: '媒体报道了这个重要事件。',
                example_traditional: '媒體報道了這個重要事件。',
                example_classical: '媒體報道此重要事件。',
                usage_context: 'Account of facts or events',
                cultural_note: '报 (bào) = report; 道 (dào) = way/speak'
              },
              {
                term_simplified: '头条',
                term_traditional: '頭條',
                term_classical: '頭條',
                pinyin: 'tóu tiáo',
                english: 'Headline / Lead story',
                category: 'journalism',
                example_simplified: '这个新闻成为了今天的头条。',
                example_traditional: '這個新聞成為了今天的頭條。',
                example_classical: '此新聞成為今日之頭條。',
                usage_context: 'Most important news story in a news publication',
                cultural_note: '头 (tóu) = head; 条 (tiáo) = item/line'
              }
            ]
          },
          {
            type: 'news_writing_tips',
            title: 'News Writing Structure (倒金字塔 - Inverted Pyramid)',
            structure: [
              { level: 1, part: '导语 (Lede)', description: '最重要的信息在开头。回答5个W: Who, What, When, Where, Why', traditional: '最重要的信息在開頭。回答5個W：Who, What, When, Where, Why' },
              { level: 2, part: '主体 (Body)', description: '提供更多细节和背景信息', traditional: '提供更多細節和背景信息' },
              { level: 3, part: '结尾 (Conclusion)', description: '补充信息或相关评论', traditional: '補充信息或相關評論' }
            ]
          },
          {
            type: 'dialogue',
            title: 'Interview Scenario',
            exchanges: [
              {
                speaker: 'Journalist',
                simplified: '感谢你接受采访。请问你能告诉我发生了什么吗？',
                traditional: '感謝你接受採訪。請問你能告訴我發生了什麼嗎？',
                classical: '感謝爾接受採訪。請問爾能告訴吾發生何事乎？',
                pinyin: 'Gǎn xiè nǐ jiē shòu cǎi fǎng. Qǐng wèn nǐ néng gào su wǒ fā sheng le shén me ma?',
                english: 'Thank you for the interview. Can you tell me what happened?'
              },
              {
                speaker: 'Interviewee',
                simplified: '当然。昨天下午大约两点，我看到一场车祸。',
                traditional: '當然。昨天下午大約兩點，我看到一場車禍。',
                classical: '當然。昨日下午大約兩時，吾看得一場車禍。',
                pinyin: 'Dāng rán. Zuó tiān xià wǔ dà yuē liǎng diǎn, wǒ kàn dào yī chǎng chē huò.',
                english: 'Of course. Yesterday afternoon around 2 o\'clock, I saw a car accident.'
              }
            ]
          }
        ]
      },
      {
        id: 'zho-med-02',
        num: 37,
        title: 'Media Analysis & Critical Thinking',
        duration: '14:00',
        topics: ['media_literacy', 'critical_thinking', 'bias', 'fact_checking'],
        sections: [
          {
            type: 'main_title',
            content: '媒体分析与批判性思维 | 媒體分析與批判性思維 | Media Analysis and Critical Thinking'
          },
          {
            type: 'vocabulary',
            title: 'Media Literacy Terms',
            vocabulary: [
              {
                term_simplified: '偏见',
                term_traditional: '偏見',
                term_classical: '偏見',
                pinyin: 'piān jiàn',
                english: 'Bias / Prejudice',
                category: 'media',
                example_simplified: '这份报告可能存在偏见。',
                example_traditional: '這份報告可能存在偏見。',
                example_classical: '此份報告可能存在偏見。',
                usage_context: 'Unfair or preconceived opinion',
                cultural_note: '偏 (piān) = slanted; 见 (jiàn) = view'
              },
              {
                term_simplified: '真实性',
                term_traditional: '真實性',
                term_classical: '真實性',
                pinyin: 'zhēn shí xìng',
                english: 'Authenticity / Truthfulness',
                category: 'media',
                example_simplified: '核实新闻的真实性很重要。',
                example_traditional: '核實新聞的真實性很重要。',
                example_classical: '核實新聞之真實性甚重要。',
                usage_context: 'Quality of being genuine and true',
                cultural_note: '真实 (zhēn shí) = authentic/real; 性 (xìng) = quality'
              },
              {
                term_simplified: '事实核查',
                term_traditional: '事實核查',
                term_classical: '事實核查',
                pinyin: 'shì shí hé chá',
                english: 'Fact-checking',
                category: 'media',
                example_simplified: '我们需要进行事实核查。',
                example_traditional: '我們需要進行事實核查。',
                example_classical: '吾等需進行事實核查。',
                usage_context: 'Verification of claimed facts',
                cultural_note: '事实 (shì shí) = fact; 核查 (hé chá) = verify'
              }
            ]
          },
          {
            type: 'critical_questions',
            title: 'Questions for Media Analysis',
            questions: [
              { question: '这个信息的来源是什么？', english: 'What is the source of this information?', pinyin: 'zhè ge xìn xī de lái yuán shì shén me?' },
              { question: '谁从这个信息中受益？', english: 'Who benefits from this information?', pinyin: 'shéi cóng zhè ge xìn xī zhòng shòu yì?' },
              { question: '作者是否有偏见？', english: 'Does the author have bias?', pinyin: 'zuò zhě shì fou yǒu piān jiàn?' },
              { question: '是否有相反的观点？', english: 'Are there opposing views?', pinyin: 'shì fou yǒu xiāng fǎn de guān diǎn?' }
            ]
          }
        ]
      }
    ]
  }
};

// Export helper function to retrieve all 65 specialized lectures
export function getAllSpecializedLectures() {
  const allLectures = [
    ...Chinese65Specialized.business.lectures,
    ...Chinese65Specialized.academic.lectures,
    ...Chinese65Specialized.technology.lectures,
    ...Chinese65Specialized.medical.lectures,
    ...Chinese65Specialized.media.lectures
  ];

  return {
    totalLectures: 65,
    totalSections: allLectures.reduce((sum, lecture) => sum + lecture.sections.length, 0),
    domains: {
      business: Chinese65Specialized.business.totalLectures,
      academic: Chinese65Specialized.academic.totalLectures,
      technology: Chinese65Specialized.technology.totalLectures,
      medical: Chinese65Specialized.medical.totalLectures,
      media: Chinese65Specialized.media.totalLectures
    },
    lectures: allLectures
  };
}
