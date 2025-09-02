import fs from 'fs';
import path from 'path';

// 현재 날짜를 YYYY-MM-DD 형식으로 반환
const getCurrentDate = () => {
  // Vercel 배포 시 VERCEL_GIT_COMMIT_DATE 환경변수 사용
  if (process.env.VERCEL_GIT_COMMIT_DATE) {
    const date = new Date(process.env.VERCEL_GIT_COMMIT_DATE);
    // UTC+9 적용
    date.setHours(date.getHours() + 9);
    return date.toISOString().split('T')[0];
  }

  // UTC+9 기준으로 날짜 생성
  const now = new Date();
  const kstOffset = 9 * 60;
  const kstTime = new Date(now.getTime() + (kstOffset * 60 * 1000));
  return kstTime.toISOString().split('T')[0];
};

// 사이트맵 XML 생성
const generateSitemap = () => {
  const currentDate = getCurrentDate();
  const baseUrl = 'https://toosign.kr';
  
  const urls = [
    { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${baseUrl}/#intro`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${baseUrl}/#skills`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${baseUrl}/#projects`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${baseUrl}/#career`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${baseUrl}/#contact`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${baseUrl}/#guestbook`, priority: '0.9', changefreq: 'monthly' },
  ];

  // 프로젝트 URL들 (동적으로 추가 가능)
  const projectUrls = [
    'portfolio','film-metadata-app', 'willie-library', 'meme-repository', 
    'my-life-story', 'ora-gung', 'type', 'olly', 
    'minigame', 'film-magazine'
  ].map(project => ({
    loc: `${baseUrl}/projects/${project}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  const allUrls = [...urls, ...projectUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // public/sitemap.xml에 저장
  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  
  console.log(`Sitemap generated with date: ${currentDate}`);
};

generateSitemap();