const sections = [
  {
    id: "lakehouse",
    name: "9.4.2.1 数据湖仓",
    badge: "7大主题库",
    description: "建设湖仓一体分层数据底座，面向监测预警、诊疗、科研、慢病和智能问数等上层应用。",
    features: [
      ["多点触发传染病综合监测预警主题库", "覆盖鼠疫、霍乱、非典、艾滋病、病毒性肝炎、麻风病、猴痘、人感染高致病性禽流感等病种并可调整。"],
      ["AI辅助影像质控与精准诊断主题库", "聚合患者基础信息、现病史、体格检查、实验室检查、治疗史，支撑影像+临床联合诊断。"],
      ["数字化融合诊室主题库", "覆盖人口学、就诊、病史、检验、影像、病理、诊断、手术治疗等多维数据。"],
      ["居民全生命周期健康数据主题库", "围绕门急诊、住院、公卫、疾控与延伸处方，支撑画像、宣教、干预、主动随访和AI助手。"],
      ["慢病防控云筛查主题库", "支撑慢病筛查与管理场景，覆盖筛查所需诊疗与检查数据。"],
      ["临床研究数智化服务主题库", "从临床和公卫数据中沉淀科研检索数据元，服务专病研究和数智化分析。"],
      ["智能问数主题库", "沉淀医疗服务与质量指标，如四级手术比例、重返再住院率、床位使用率、医护比等。"]
    ]
  },
  {
    id: "ai-platform",
    name: "9.4.2.2.1 AI中台",
    badge: "智能问数+NLP+智能体管理",
    description: "提供自然语言解析、智能问数、模型与知识库管理能力。",
    features: [
      ["指标分析", "自然语言/语音解析指标并返回结果，支持按科室、时间、医生等维度多轮下钻对话，可导出。", true],
      ["快捷指令", "支持配置快捷指令并在对话中快速调起场景。", true],
      ["根因分析报告", "对异常指标自动归因并输出可导出的分析报告。", true],
      ["智能SQL查询", "对非标准指标自动生成查询定义并执行SQL返回结果。", true],
      ["移动端智能预警", "手机端预警助手动态分析异常指标并推荐干预措施。", true],
      ["基于图谱的泛语义解析", "展示主体名称、标准名称、语义标签、指标值及知识图谱。", true],
      ["文本结构化处理", "支持单份文本可视化分析、实体关系识别及变量溯源高亮。"],
      ["智能体统一管理", "支持智能体创建编排、协同管理、角色管理、权限管理、日志监控等。"]
    ]
  },
  {
    id: "data-platform",
    name: "9.4.2.2.2 数据中台",
    badge: "资产管理+分类分级+指标管理",
    description: "提供资产目录、授权申请、分类分级及指标全生命周期管理。",
    features: [
      ["申请数据自定义选择", "按模型/表/字段自定义申请数据范围并限制时间窗口。", true],
      ["API生成", "审批通过后自动生成API与文档（地址、方法、参数、示例）。", true],
      ["复合指标管理", "可视化配置同主题指标间公式计算取数逻辑。", true],
      ["数据资产审批", "支持审批/驳回并记录审批意见，展示待审与结果统计。"],
      ["分类分级流程配置", "支持分类分级审批发布与对外服务调用。"],
      ["指标固化", "支持按时间维和组织维自动固化存储指标结果。"]
    ]
  },
  {
    id: "biz-platform",
    name: "9.4.2.2.3 业务中台",
    badge: "微服务开放+API+统一用户+安全引擎",
    description: "建设统一服务注册、管理、开放、认证与安全审计能力。",
    features: [
      ["服务列表", "展示全部服务与类型，支持待发布/待下架/已发布切换和关键词检索。", true],
      ["微服务模拟沙箱", "支持测试、联调、验证，保障服务准确性与稳定性。"],
      ["微服务整体监控", "监控交互延时、调用成功率、交换次数并可下钻日志。"],
      ["统一用户管理", "提供用户、组织、认证、权限统一管理及分级授权。"],
      ["数据安全引擎", "覆盖脱敏、加密、白名单、用户安全审计。"],
      ["交互服务API", "覆盖慢病防控云筛查、数字化融合诊室等多类业务接口。"]
    ]
  },
  {
    id: "data-service",
    name: "9.4.3 数据服务",
    badge: "汇聚接入+治理质控",
    description: "本次汇聚接入与治理质控总规模均不少于16.5亿条。",
    features: [
      ["区卫生信息平台数据汇聚接入", "覆盖区属上报32表、市平台下发、签约下沉、公卫16系统、影像索引。"],
      ["46家社区卫生服务中心接入", "HIS/CIS/LIS等实时或准实时汇聚接入。"],
      ["浦南医院/光明中医医院接入", "试点医院信息系统数据接入并纳入统一治理。"],
      ["直属机构11系统接入", "覆盖血站、急救、卫监、职业健康等系统数据。"],
      ["政府部门与YQ监测数据接入", "汇聚环境监测、人口、气象、网络YQ等多源数据。"],
      ["全链路治理质控", "采集入湖、标准化、融合治理、质量检查与异常处置闭环。"]
    ]
  },
  {
    id: "integration",
    name: "9.4.1.3/9.4.1.4 系统软件与集成",
    badge: "国产中间件+系统集成",
    description: "匹配国产中间件并完成基于全数据要素的数字健康城区示范项目整体集成。",
    features: [
      ["系统软件", "匹配本次建设的国产中间件能力。"],
      ["系统集成", "包含项目所有建设内容的一体化集成服务。"]
    ]
  }
];

const nav = document.getElementById("nav");
const panel = document.getElementById("panel");
const searchInput = document.getElementById("searchInput");
const featureCount = document.getElementById("featureCount");
const starCount = document.getElementById("starCount");

let onlyStar = false;
let currentSection = sections[0].id;

function renderNav() {
  nav.innerHTML = sections
    .map(
      (s) => `<button class="nav-btn ${s.id === currentSection ? "active" : ""}" data-id="${s.id}">${s.name}</button>`
    )
    .join("");

  nav.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSection = btn.dataset.id;
      renderNav();
      renderPanel();
    });
  });
}

function renderPanel() {
  const tpl = document.getElementById("sectionTemplate");
  const ftpl = document.getElementById("featureTemplate");
  const data = sections.find((s) => s.id === currentSection);
  const q = searchInput.value.trim();

  const node = tpl.content.cloneNode(true);
  node.querySelector("h2").textContent = data.name;
  node.querySelector(".chip").textContent = data.badge;
  node.querySelector(".desc").textContent = data.description;

  const list = node.querySelector(".feature-list");
  let visible = 0;

  data.features.forEach(([title, desc, star]) => {
    const item = ftpl.content.cloneNode(true);
    const root = item.querySelector(".feature-item");
    root.dataset.star = String(!!star);
    item.querySelector(".feature-title").textContent = title;
    item.querySelector(".feature-desc").textContent = desc;

    const matched = !q || title.includes(q) || desc.includes(q);
    const passStar = !onlyStar || !!star;
    if (!(matched && passStar)) root.dataset.hidden = "true";
    else visible += 1;

    list.append(item);
  });

  panel.innerHTML = "";
  panel.append(node);

  featureCount.textContent = sections.reduce((a, s) => a + s.features.length, 0);
  starCount.textContent = sections.reduce((a, s) => a + s.features.filter((f) => f[2]).length, 0);

  if (!visible) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.textContent = "当前筛选条件下无匹配功能，请调整关键词或取消“仅看▲重点”。";
    panel.append(empty);
  }
}

document.getElementById("btnOnlyStar").addEventListener("click", () => {
  onlyStar = true;
  renderPanel();
});

document.getElementById("btnShowAll").addEventListener("click", () => {
  onlyStar = false;
  searchInput.value = "";
  renderPanel();
});

searchInput.addEventListener("input", renderPanel);

renderNav();
renderPanel();
