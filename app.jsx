const { useMemo, useState } = React;

const menuTree = [
  { key: "home", label: "首页", pages: ["平台总览驾驶舱"] },
  { key: "lakehouse", label: "数据湖仓", pages: ["湖仓分层架构", "主题库管理", "数据资源浏览"] },
  { key: "ai", label: "AI中台", pages: ["智能问数", "医学自然语言解析引擎", "智能体管理"] },
  { key: "dataCenter", label: "数据中台", pages: ["数据资产管理平台", "医疗数据分类分级管理", "指标管理平台"] },
  { key: "biz", label: "业务中台", pages: ["微服务开放平台", "交互服务API", "统一用户管理", "数据安全引擎"] },
  { key: "ingest", label: "数据汇聚接入", pages: ["接入总览", "区卫生信息平台接入", "46家社区卫生服务中心接入", "试点医院接入", "区直属机构系统接入", "政府部门与YQ监测数据接入"] },
  { key: "governance", label: "数据治理与质控", pages: ["治理总览", "区属医疗机构数据治理", "市平台下发/签约下沉数据治理", "公卫16系统数据治理", "区域影像索引治理"] },
  { key: "ops", label: "平台监控与运维", pages: ["平台运行监控", "服务调用监控", "告警中心", "任务调度"] },
];

const themeLibraries = ["多点触发传染病综合监测预警主题库", "AI辅助影像质控与精准诊断主题库", "数字化融合诊室主题库", "居民全生命周期健康数据主题库", "慢病防控云筛查主题库", "临床研究数智化服务主题库", "智能问数主题库"];
const sourceSystems = ["区卫生信息平台", "46家社区卫生服务中心", "浦南医院试点医院信息系统", "光明中医医院试点医院信息系统", "区直属机构系统", "政府部门数据", "YQ监测数据"];

const kpiDashboard = [["接入系统数", "67", "+5"], ["主题库数", "7", "100%覆盖"], ["治理数据量", "16.8亿", "+0.3亿"], ["接口数", "312", "+26"], ["运行任务数", "1,247", "运行中"], ["告警数", "9", "待处理"]];
const statusClass = { 正常: "ok", 运行中: "ok", 已发布: "ok", 高: "warn", 中: "warn", 异常: "err", 失败: "err", 停用: "err", 已授权: "ok", 待授权: "warn" };

function CardStats({ items }) { return <section className="stats-grid">{items.map(([k, v, t]) => <div className="card stat" key={k}><p>{k}</p><h3>{v}</h3><span>{t}</span></div>)}</section>; }
function MiniTrend({ title, values }) { const max = Math.max(...values); return <div className="card"><h4>{title}</h4><div className="bars">{values.map((v, i) => <i key={i} style={{ height: `${(v / max) * 100}%` }} />)}</div></div>; }
function FilterBar({ placeholder = "按名称/状态检索" }) { return <div className="card filter-row"><input placeholder={placeholder} /><select><option>全部状态</option><option>正常</option><option>异常</option></select><select><option>最近30天</option><option>最近7天</option><option>今日</option></select><button>查询</button><button className="plain">重置</button></div>; }
function DataTable({ columns, rows, onDetail }) { return <div className="card table-wrap"><table><thead><tr>{columns.map((c) => <th key={c}>{c}</th>)}{onDetail && <th>操作</th>}</tr></thead><tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{statusClass[c] ? <span className={`tag ${statusClass[c]}`}>{c}</span> : c}</td>)}{onDetail && <td><button className="link" onClick={() => onDetail(r)}>查看详情</button></td>}</tr>)}</tbody></table></div>; }
function Drawer({ data, onClose }) { if (!data) return null; return <div className="drawer-mask" onClick={onClose}><aside className="drawer" onClick={(e) => e.stopPropagation()}><header><h3>详情抽屉</h3><button onClick={onClose}>关闭</button></header><ul>{data.map((x, i) => <li key={i}>{x}</li>)}</ul></aside></div>; }

function HomePage({ onDetail }) {
  return <>
    <FilterBar placeholder="按模块/告警级别检索驾驶舱信息" />
    <CardStats items={kpiDashboard} />
    <section className="grid-3"><MiniTrend title="数据接入趋势（近7日）" values={[65, 72, 76, 80, 83, 89, 92]} /><MiniTrend title="治理任务趋势（近7日）" values={[32, 35, 39, 41, 48, 44, 51]} /><MiniTrend title="服务调用趋势（万次/日）" values={[42, 50, 53, 58, 61, 67, 69]} /></section>
    <div className="card"><h4>重点主题库卡片</h4><div className="chip-wrap">{themeLibraries.map((x) => <span key={x} className="chip">{x}</span>)}</div></div>
    <DataTable onDetail={onDetail} columns={["类型", "名称", "级别", "状态", "责任人", "更新时间"]} rows={[["告警", "接口网关延时波动", "中", "异常", "张宁", "09:35"], ["待办", "公卫16系统规则修复", "高", "运行中", "李晨", "09:21"], ["待办", "浦南医院增量校验", "中", "运行中", "王坤", "09:10"]]} />
  </>;
}

function GenericModule({ stats, cols, rows, onDetail, chart = true }) {
  return <>
    <FilterBar />
    <CardStats items={stats} />
    {chart && <section className="grid-3"><MiniTrend title="处理量趋势" values={[30, 42, 39, 45, 53, 50, 57]} /><MiniTrend title="成功率趋势" values={[90, 91, 92, 92, 93, 94, 95]} /><MiniTrend title="异常率趋势" values={[8, 7, 6, 6, 5, 4, 3]} /></section>}
    <DataTable columns={cols} rows={rows} onDetail={onDetail} />
  </>;
}

function AskDataPage() {
  return <div className="grid-2"><div className="card"><h4>智能问数智能体</h4><textarea defaultValue="请问2026年第一季度，46家社区高血压随访完成率环比变化？" /><button className="ask">发送</button><p className="sql">SQL示意：SELECT month, follow_rate FROM ads_chronic_followup ...</p></div><div className="card"><h4>问数结果</h4><CardStats items={[["随访完成率", "86.4%", "+3.1%"], ["异常机构", "4", "需干预"], ["样本量", "42.3万", "季度"]]} /><MiniTrend title="月度趋势" values={[75, 78, 80, 81, 83, 85, 86]} /></div></div>;
}

function renderPage(page, onDetail) {
  if (page === "平台总览驾驶舱") return <HomePage onDetail={onDetail} />;
  if (page === "湖仓分层架构") return <div className="card"><h4>湖仓分层架构（ODS→明细层→主题层→服务层）</h4><div className="layers"><div>ODS贴源层：区平台/社区中心/试点医院/直属机构/政府与YQ</div><div>DWD明细层：标准化、主索引、去重、贴源核验</div><div>ADS主题层：{themeLibraries.join("、")}</div><div>服务层：智能问数、交互API、预警分析、指标服务</div></div></div>;
  if (page === "主题库管理") return <GenericModule onDetail={onDetail} stats={[["主题库总数", "7", "全部启用"], ["总数据量", "1.96亿", "+0.12亿"], ["总字段数", "6,812", "+120"], ["服务引用数", "183", "+14"]]} cols={["主题库", "来源系统", "数据量", "字段数", "服务数", "状态", "更新时间"]} rows={themeLibraries.map((x, i) => [x, sourceSystems[i % sourceSystems.length], `${120 + i * 15}万`, `${860 + i * 30}`, `${20 + i}`, i % 2 ? "正常" : "运行中", `2026-03-${10 + i}`])} />;
  if (page === "数据资源浏览") return <GenericModule onDetail={onDetail} stats={[["数据表", "2,918", "+52"], ["字段", "38,426", "+491"], ["共享表", "616", "+32"], ["最近更新", "09:40", "实时"]]} cols={["主题", "表名", "字段数", "更新时间", "共享状态"]} rows={[["传染病预警", "dwd_cdc_case_event", "82", "09:33", "正常"], ["慢病筛查", "ads_chronic_risk_profile", "65", "09:20", "运行中"], ["融合诊室", "ads_consult_detail", "97", "09:11", "正常"]]} />;
  if (page === "智能问数") return <AskDataPage />;

  const pageMap = {
    "医学自然语言解析引擎": [[["解析任务", "3,420", "+88"], ["实体识别准确率", "94.6%", "+0.4%"], ["结构化字段", "1,268", "+42"], ["图谱命中率", "91.2%", "+0.6%"]], ["任务ID", "文本类型", "实体数", "结构化字段", "状态", "完成时间"], [["NLP-23091", "出院小结", "38", "24", "正常", "09:26"], ["NLP-23092", "门诊病历", "31", "19", "运行中", "09:22"], ["NLP-23093", "影像报告", "22", "12", "异常", "09:16"]]],
    "智能体管理": [[["智能体总数", "42", "+3"], ["活跃智能体", "26", "+2"], ["版本数", "109", "+5"], ["日调用量", "12.6万", "+0.8万"]], ["智能体名称", "状态", "版本", "调用次数", "负责人", "更新时间"], [["智能问数助手", "正常", "v2.8", "52,100", "刘敏", "09:34"], ["预警干预助手", "运行中", "v1.6", "26,080", "韩卓", "09:18"], ["数据资产助手", "正常", "v1.2", "11,240", "徐涛", "09:10"]]],
    "数据资产管理平台": [[["资产条目", "8,921", "+136"], ["共享资产", "1,312", "+45"], ["热度TOP资产", "30", "实时"], ["申请通过率", "96.8%", "+1.2%"]], ["资产名称", "分类", "标签", "热度", "共享状态", "更新时间"], [["居民全生命周期宽表", "人口健康", "画像", "高", "正常", "09:30"], ["慢病随访事件表", "慢病管理", "随访", "中", "运行中", "09:12"], ["影像报告结构化表", "影像", "AI", "高", "正常", "09:08"]]],
    "医疗数据分类分级管理": [[["分类标签", "124", "+3"], ["分级规则", "46", "+1"], ["敏感字段", "2,306", "+23"], ["规则覆盖率", "98.2%", "+0.3%"]], ["数据元", "分类", "分级", "规则", "状态", "更新时间"], [["身份证号", "个人身份", "高", "脱敏+加密", "正常", "09:20"], ["联系方式", "个人信息", "中", "脱敏", "正常", "09:09"], ["诊断编码", "医疗业务", "中", "访问控制", "运行中", "09:02"]]],
    "指标管理平台": [[["指标总数", "1,623", "+33"], ["复合指标", "309", "+7"], ["衍生指标", "582", "+12"], ["固化任务", "248", "运行中"]], ["指标名称", "口径说明", "所属主题", "负责人", "状态", "更新时间"], [["床位使用率", "占用床日/开放床日", "智能问数", "沈悦", "正常", "09:24"], ["非计划再住院率", "30天再住院率", "医疗质量", "何翔", "正常", "09:16"], ["四级手术比例", "四级手术/手术总数", "医疗服务", "陈澜", "运行中", "09:11"]]],
    "微服务开放平台": [[["服务总数", "186", "+9"], ["已发布", "172", "+8"], ["待下架", "4", "关注"], ["日调用", "89.4万", "+5.2万"]], ["服务名称", "状态", "调用次数", "负责人", "版本", "更新时间"], [["居民档案查询服务", "已发布", "152,300", "胡静", "v3.2", "09:33"], ["慢病风险评估服务", "已发布", "120,840", "许峰", "v2.4", "09:21"], ["随访任务锁定服务", "运行中", "89,300", "卢晨", "v1.8", "09:05"]]],
    "交互服务API": [[["API总数", "312", "+22"], ["健康度", "98.9%", "+0.2%"], ["平均响应", "126ms", "-9ms"], ["授权应用", "74", "+5"]], ["API名称", "路径", "方法", "响应时间", "授权状态", "状态"], [["档案实时查询", "/api/archive/realtime", "GET", "110ms", "已授权", "正常"], ["高血压筛查登记", "/api/chronic/hbp/register", "POST", "132ms", "已授权", "正常"], ["慢阻肺检测结果登记", "/api/copd/result/save", "POST", "190ms", "待授权", "运行中"]]],
    "统一用户管理": [[["用户数", "4,238", "+32"], ["角色数", "96", "+2"], ["机构数", "82", "全覆盖"], ["权限策略", "268", "+10"]], ["账号", "姓名", "机构", "角色", "状态", "最后登录"], [["zhangning", "张宁", "浦东卫健委", "平台管理员", "正常", "09:28"], ["liuchen", "刘晨", "浦南医院", "数据治理专员", "正常", "09:11"], ["wangkun", "王坤", "社区中心-12", "接口运维", "停用", "昨日"]]],
    "数据安全引擎": [[["访问控制策略", "146", "+3"], ["脱敏策略", "58", "+2"], ["审计规则", "72", "+1"], ["风险事件", "4", "已处置3"]], ["规则名称", "类型", "适用范围", "命中次数", "状态", "更新时间"], [["身份证号掩码", "脱敏", "全域共享接口", "18,320", "正常", "09:12"], ["高敏字段白名单", "访问控制", "科研沙箱", "2,910", "运行中", "09:05"], ["异常下载审计", "审计", "全部用户", "120", "异常", "08:58"]]],
  };

  if (pageMap[page]) {
    const [stats, cols, rows] = pageMap[page];
    return <GenericModule stats={stats} cols={cols} rows={rows} onDetail={onDetail} />;
  }

  if (page.includes("接入") || page === "接入总览") {
    return <GenericModule onDetail={onDetail} stats={[["接入来源总数", "7", "参数全覆盖"], ["接入成功率", "99.1%", "+0.2%"], ["运行任务", "382", "+14"], ["最近同步", "1分钟前", "实时"]]} cols={["数据源", "接入方式", "同步周期", "状态", "最近同步", "异常记录"]} rows={sourceSystems.map((s, i) => [s, i % 2 ? "API/CDC" : "ETL/消息总线", i % 3 ? "实时/准实时" : "日批", i % 4 ? "正常" : "异常", `2026-03-15 0${i}:2${i}`, i % 4 ? "无" : "同步延时预警"])} />;
  }
  if (page.includes("治理") || page === "治理总览") {
    return <GenericModule onDetail={onDetail} stats={[["治理总量", "16.8亿", "+0.3亿"], ["质量评分", "96.2", "+0.4"], ["问题数", "598", "-26"], ["整改率", "90.4%", "+2.1%"]]} cols={["治理对象", "质量规则", "问题类型", "问题数量", "处置状态", "整改闭环"]} rows={[["区属医疗机构上报", "42条规则", "字段缺失", "182", "处置中", "91%"], ["市平台下发/签约下沉", "31条规则", "编码不一致", "96", "已完成", "100%"], ["公卫16系统", "54条规则", "主键重复", "263", "处置中", "86%"], ["区域影像索引", "28条规则", "关联失败", "57", "已完成", "100%"]]} />;
  }
  if (page.includes("监控") || page === "告警中心" || page === "任务调度") {
    return <GenericModule onDetail={onDetail} stats={[["注册用户", "6,502", "+39"], ["在线数", "1,286", "+44"], ["并发", "3,420/s", "+210/s"], ["服务健康度", "98.7%", "+0.1%"]]} cols={["监控项", "数值", "阈值", "状态", "更新时间"]} rows={[["在线用户", "1,286", "-", "正常", "09:40"], ["并发请求", "3,420/s", "-", "正常", "09:40"], ["平均响应", "168ms", "-", "正常", "09:40"], ["告警中心", "9", "-", "异常", "09:38"], ["调度任务", "1,247", "-", "运行中", "09:39"]]} />;
  }
  return <div className="card">页面建设中：{page}</div>;
}

function App() {
  const [activeGroup, setActiveGroup] = useState(menuTree[0].key);
  const [activePage, setActivePage] = useState(menuTree[0].pages[0]);
  const [drawer, setDrawer] = useState(null);
  const menu = useMemo(() => menuTree.find((m) => m.key === activeGroup) || menuTree[0], [activeGroup]);

  return <div className="app"><aside className="sidebar"><h1>包1功能原型</h1>{menuTree.map((group) => <details key={group.key} open={group.key === activeGroup} onToggle={() => { setActiveGroup(group.key); setActivePage(group.pages[0]); }}><summary>{group.label}</summary><div className="sub-list">{group.pages.map((page) => <button key={page} className={activePage === page ? "active" : ""} onClick={() => { setActiveGroup(group.key); setActivePage(page); }}>{page}</button>)}</div></details>)}</aside><main className="main"><header className="topbar"><div><h2>{activePage}</h2><p>严格映射包1功能参数：软件功能开发 + 数据服务 + 平台监控运维</p></div><span className="badge">模块：{menu.label}</span></header>{renderPage(activePage, setDrawer)}</main><Drawer data={drawer} onClose={() => setDrawer(null)} /></div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
