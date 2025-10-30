<template>
  <main class="nav-wrap">
    <header class="nav-header">
      <h1>我的导航页</h1>
      <p class="subtitle">常用服务 & 文档 快速入口</p>
    </header>


    <section class="links">
      <div v-for="(group, idx) in groups" :key="idx" class="group">
        <h2>{{ group.title }}</h2>
        <ul>
          <li v-for="link in group.items" :key="link.href">
            <a :href="link.href" :title="link.desc" target="_blank" rel="noreferrer noopener">
              <strong>{{ link.name }}</strong>
              <span class="desc">{{ link.desc }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>


    <footer class="nav-footer">
      <small>生成时间：{{ buildTime }}</small>
    </footer>
  </main>
</template>


<script setup lang="ts">
import { ref } from 'vue'


const buildTime = new Date().toLocaleString()


const groups = ref([
  {
    title: '开发工具',
    items: [
      { name: 'GitLab', href: 'https://gitlab.example/', desc: '代码仓库' },
      { name: 'Jenkins', href: 'https://jenkins.example/', desc: 'CI/CD' }
    ]
  },
  {
    title: '文档',
    items: [
      { name: 'Swagger', href: 'https://api.example/swagger', desc: 'API 文档' },
      { name: 'Confluence', href: 'https://confluence.example/', desc: '技术文档' }
    ]
  }
])
</script>


<style scoped>
.nav-wrap {
  width: 880px;
  max-width: calc(100% - 40px);
  background: #fff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
}
.nav-header h1 { margin: 0; font-size: 24px }
.subtitle { color: #6b7280; margin: 6px 0 20px }
.group { margin-bottom: 14px }
.group h2 { font-size: 16px; margin-bottom: 8px }
.links ul { list-style: none; padding: 0; margin: 0 }
.links li { padding: 8px 0; border-top: 1px dashed #eee }
.links a { display:flex; justify-content:space-between; align-items:center; text-decoration:none }
.desc { color:#9ca3af; font-size:12px }
.nav-footer { margin-top: 12px; text-align: right; color:#9ca3af }
</style>