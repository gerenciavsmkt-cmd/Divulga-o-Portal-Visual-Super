/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { 
  Rocket, 
  Users, 
  Trophy, 
  MessageSquare, 
  Gift, 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Zap,
  Smartphone,
  QrCode,
  Video,
  Copy,
  Check,
  Download,
  Share2,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function App() {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = (text: string) => {
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-visual-yellow/30">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-visual-blue py-20 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-visual-yellow rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-16"
              >
                <img 
                  src="https://res.cloudinary.com/dq8978o4w/image/upload/v1746451989/Logo_vertical_branca_ozz3z1.png" 
                  alt="Visual Super Logo" 
                  className="h-32 md:h-40 w-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-4 bg-visual-yellow text-visual-dark hover:bg-visual-yellow/90 px-4 py-1 text-sm font-bold uppercase tracking-wider">
                  Lançamento Estratégico
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                SEU ASSISTENTE ONLINE <br />
                <span className="text-visual-yellow">24H PRA VOCÊ</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Transformando o Portal de Soluções Visual Super no braço direito do consultor e no canal favorito do cliente.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Section 1: Narrative */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-visual-dark mb-6">
                  1. O sucesso da Portal também depende de você!
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  Não é apenas "divulgar um site". É apresentar uma ferramenta que trabalha para o consultor enquanto ele foca em novos negócios.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Cliente compra fora do horário comercial",
                    "Reposição de estoque autônoma",
                    "Histórico de pedidos e notas fiscais",
                    "Montagem de orçamentos 24h"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-visual-blue">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-visual-blue rounded-2xl text-white">
                  <p className="text-xl font-bold italic">
                    "Cada cliente que usa o portal = menos tempo gasto com pedidos simples."
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-video bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                  <img 
                    src="https://res.cloudinary.com/dq8978o4w/image/upload/v1775833387/Insta_banner_mmtzuh.jpg" 
                    alt="Portal Visual Super" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-visual-blue/40 to-transparent" />
                </div>
                {/* Floating UI Elements */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-visual-yellow fill-visual-yellow" />
                    <span className="font-bold text-sm">Status: Online</span>
                  </div>
                  <p className="text-xs text-slate-500">Seu assistente está pronto para receber pedidos.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Gamification */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 className="text-3xl md:text-4xl font-bold text-visual-dark mb-4" {...fadeIn}>
                2. Campanha "Cliente Conectado"
              </motion.h2>
              <motion.p className="text-slate-600 text-lg" {...fadeIn}>
                Incentive o seu cliente a utilizar o Portal e saia na frente. Consultor que ativa, ganha.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { title: "Cadastro Criado", points: 10, icon: Users, color: "bg-visual-blue" },
                { title: "Primeiro Login", points: 20, icon: Rocket, color: "bg-purple-500" },
                { title: "Primeiro Pedido", points: 50, icon: Trophy, color: "bg-visual-yellow" }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <Card className="h-full border-2 hover:border-visual-blue transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 ${step.color} rounded-2xl mx-auto flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                      <CardDescription className="text-lg font-bold text-visual-blue">
                        +<Counter value={step.points} /> Pontos
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white overflow-hidden relative" {...fadeIn}>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Gift className="w-48 h-48 rotate-12" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Gift className="text-visual-yellow" /> Premiações Possíveis
                </h3>
                <div className="flex flex-wrap gap-4">
                  {["Bônus em Dinheiro", "Vale Combustível", "Almoço Pago", "Destaque no Ranking"].map((prize, i) => (
                    <Badge key={i} variant="outline" className="text-white border-white/30 px-4 py-2 text-base">
                      {prize}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Ranking */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-2xl border-none bg-white overflow-hidden">
                  <div className="bg-visual-blue p-6 text-white flex justify-between items-center">
                    <h3 className="font-bold text-xl">🏆 Ranking Portal Visual Super</h3>
                    <Badge className="bg-visual-yellow text-visual-dark">Semanal</Badge>
                  </div>
                  <div className="p-6 space-y-6">
                    <RankingList />
                  </div>
                  <div className="p-4 bg-slate-100 text-center text-xs text-slate-500 font-medium">
                    Exibido em: Grupo de Vendas • TV da Empresa • Reunião Semanal
                  </div>
                </Card>
              </motion.div>
              
              <motion.div className="order-1 lg:order-2" {...fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-visual-dark mb-6">
                  3. Ranking Semanal: <br />
                  <span className="text-visual-blue">Competição Saudável</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  Ninguém gosta de ficar em último lugar. O ranking gera o estímulo necessário para que a divulgação do portal não caia no esquecimento.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-visual-yellow flex-shrink-0" />
                    <p className="text-slate-700">Foco em <strong>clientes cadastrados</strong></p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-visual-yellow flex-shrink-0" />
                    <p className="text-slate-700">Foco em <strong>clientes ativos</strong></p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-visual-yellow flex-shrink-0" />
                    <p className="text-slate-700">Foco em <strong>pedidos realizados</strong></p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: Tools & Scripts */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 className="text-3xl md:text-4xl font-bold text-visual-dark mb-4" {...fadeIn}>
                Divulgação
              </motion.h2>
              <motion.p className="text-slate-600 text-lg" {...fadeIn}>
                Scripts prontos e materiais de apoio para o consultor não perder tempo.
              </motion.p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div {...fadeIn}>
                <Card className="h-full border-none bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="text-visual-blue" /> Script de Abordagem
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-blue-100 italic text-slate-700">
                      "Seu cadastro no Portal Visual Super já está liberado. Lá você consegue ver histórico de pedidos, baixar notas fiscais e montar novos pedidos quando quiser, até fora do horário. Vou te mandar o acesso agora."
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-blue-100 italic text-slate-700">
                      "Quando precisar repor material, pode entrar direto no portal que já agiliza o seu pedido."
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div {...fadeIn}>
                <Card className="h-full border-none bg-slate-900 text-white overflow-visible">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="text-visual-yellow" /> Material de Apoio
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-visible">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { 
                          label: "Link Curto", 
                          icon: Smartphone, 
                          onClick: () => setShowLinkModal(true) 
                        },
                        { 
                          label: "QR Code", 
                          icon: QrCode 
                        },
                        { 
                          label: "Vídeo 30s", 
                          icon: Video,
                          isPlayer: true
                        },
                        { 
                          label: "Arte WhatsApp", 
                          icon: MessageSquare 
                        }
                      ].map((tool, i) => (
                        <div 
                          key={i} 
                          className="relative group"
                          onMouseEnter={() => tool.isPlayer && setHoveredVideo(true)}
                          onMouseLeave={() => tool.isPlayer && setHoveredVideo(false)}
                        >
                          <button 
                            onClick={tool.onClick}
                            className="w-full flex flex-col items-center justify-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/5 hover:border-white/20"
                          >
                            <tool.icon className="w-8 h-8 mb-2 text-visual-yellow" />
                            <span className="text-sm font-bold">{tool.label}</span>
                          </button>

                          {tool.isPlayer && (
                            <AnimatePresence>
                              {hoveredVideo && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 bg-slate-800 rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-50 pointer-events-auto"
                                >
                                  <div className="aspect-[9/16] bg-black relative group/player">
                                    <video 
                                      src="https://res.cloudinary.com/dq8978o4w/video/upload/v1775842695/portal-intro-divulga_uxgzef.mp4"
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/player:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                      <a 
                                        href="https://res.cloudinary.com/dq8978o4w/video/upload/v1775842695/portal-intro-divulga_uxgzef.mp4" 
                                        download
                                        className="p-2 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"
                                      >
                                        <Download className="w-4 h-4" />
                                      </a>
                                      <button 
                                        onClick={() => shareWhatsApp("Confira o novo Portal Visual Super! https://portal.visualsuper.com.br")}
                                        className="p-2 bg-green-500 rounded-full text-white hover:scale-110 transition-transform"
                                      >
                                        <Share2 className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="p-3 text-center text-xs font-bold text-slate-300">
                                    Preview do Portal
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: Benefits */}
        <section className="py-24 bg-visual-blue text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" {...fadeIn}>
                5. Benefícios Exclusivos
              </motion.h2>
              <motion.p className="text-blue-100 text-lg" {...fadeIn}>
                Incentive o seu cliente, ele só tem a ganhar.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Preços Especiais", desc: "Condições diferenciadas para pedidos online." },
                { title: "Promoções Flash", desc: "Ofertas exclusivas que só aparecem no portal." },
                { title: "Lançamentos", desc: "Acesso antecipado a novos produtos da Visual Super." },
                { title: "Reposição Rápida", desc: "Um clique para repetir o último pedido." }
              ].map((benefit, i) => (
                <motion.div 
                  key={i} 
                  className="p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 bg-visual-yellow rounded-xl flex items-center justify-center text-visual-dark mb-4 font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div className="mt-16 text-center" {...fadeIn}>
              <p className="text-2xl font-black text-visual-yellow uppercase tracking-widest">
                🔥 "Promoções exclusivas apenas para clientes do portal."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 6: 90 Day Plan */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 className="text-3xl md:text-4xl font-bold text-visual-dark mb-4" {...fadeIn}>
                6. Plano de Ativação (90 Dias)
              </motion.h2>
              <motion.p className="text-slate-600 text-lg" {...fadeIn}>
                A jornada completa: Cadastro → Uso → Pedido → Hábito.
              </motion.p>
            </div>
            
            <Tabs defaultValue="fase1" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8 h-14 bg-slate-100 p-1 rounded-2xl">
                <TabsTrigger value="fase1" className="rounded-xl font-bold data-[state=active]:bg-visual-blue data-[state=active]:text-white">Fase 1: Implantação</TabsTrigger>
                <TabsTrigger value="fase2" className="rounded-xl font-bold data-[state=active]:bg-visual-blue data-[state=active]:text-white">Fase 2: Engajamento</TabsTrigger>
                <TabsTrigger value="fase3" className="rounded-xl font-bold data-[state=active]:bg-visual-blue data-[state=active]:text-white">Fase 3: Consolidação</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fase1">
                <Card className="border-2 border-slate-100 shadow-xl rounded-3xl overflow-hidden">
                  <div className="bg-slate-50 p-6 border-b">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-blue-100 text-visual-blue hover:bg-blue-100">Dias 1 a 30</Badge>
                      <span className="text-sm font-bold text-slate-500">Meta: 20 cadastros/consultor</span>
                    </div>
                    <h3 className="text-2xl font-bold text-visual-dark">Colocar o portal na rotina</h3>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-bold text-visual-blue flex items-center gap-2">
                          <Target className="w-4 h-4" /> Ações Principais
                        </h4>
                        <ul className="space-y-3 text-slate-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 mt-1 text-visual-yellow" />
                            <span>Treinamento rápido da equipe</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 mt-1 text-visual-yellow" />
                            <span>Lançamento da campanha interna</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 mt-1 text-visual-yellow" />
                            <span>Divulgação nas entregas (QR Code)</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <p className="text-sm font-bold text-visual-blue mb-2 uppercase tracking-wider">Dica de Ouro</p>
                        <p className="text-slate-700 italic">"O portal é seu assistente de vendas 24h. Use-o para liberar seu tempo para vendas complexas."</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="fase2">
                <Card className="border-2 border-slate-100 shadow-xl rounded-3xl overflow-hidden">
                  <div className="bg-slate-50 p-6 border-b">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100">Dias 31 a 60</Badge>
                      <span className="text-sm font-bold text-slate-500">Meta: 50% de acessos ativos</span>
                    </div>
                    <h3 className="text-2xl font-bold text-visual-dark">Fazer o cliente usar</h3>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-bold text-visual-blue flex items-center gap-2">
                          <Target className="w-4 h-4" /> Ações Principais
                        </h4>
                        <ul className="space-y-3 text-slate-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 mt-1 text-visual-yellow" />
                            <span>Promoções exclusivas do portal</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 mt-1 text-visual-yellow" />
                            <span>Vídeo tutorial rápido (WhatsApp)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 mt-1 text-visual-yellow" />
                            <span>Estratégia do "pedido montado"</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                        <p className="text-sm font-bold text-purple-600 mb-2 uppercase tracking-wider">Estratégia</p>
                        <p className="text-slate-700 italic">"Você pode montar o pedido no portal e eu finalizo para você." - Cria familiaridade.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="fase3">
                <Card className="border-2 border-slate-100 shadow-xl rounded-3xl overflow-hidden">
                  <div className="bg-slate-50 p-6 border-b">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Dias 61 a 90</Badge>
                      <span className="text-sm font-bold text-slate-500">Meta: 30% pedidos via portal</span>
                    </div>
                    <h3 className="text-2xl font-bold text-visual-dark">Venda recorrente automática</h3>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-bold text-visual-blue flex items-center gap-2">
                          <Target className="w-4 h-4" /> Ações Principais
                        </h4>
                        <ul className="space-y-3 text-slate-600">
                          <li className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 mt-1 text-visual-yellow" />
                            <span>Comunicação de reposição facilitada</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 mt-1 text-visual-yellow" />
                            <span>Destaque para histórico e recomendações</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 mt-1 text-visual-yellow" />
                            <span>Integração total Consultor + Portal</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                        <p className="text-sm font-bold text-green-600 mb-2 uppercase tracking-wider">Foco</p>
                        <p className="text-slate-700 italic">Transformar o portal no canal de compra preferido para itens de reposição.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Section 7: Metrics */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 className="text-3xl md:text-4xl font-bold text-visual-dark mb-4" {...fadeIn}>
                7. Métricas de Sucesso
              </motion.h2>
              <motion.p className="text-slate-600 text-lg" {...fadeIn}>
                O que não é medido não é gerenciado.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Cadastrados", value: "200-400", sub: "Novos clientes" },
                { label: "Ativos", value: "100+", sub: "Logins mensais" },
                { label: "Pedidos", value: "30-50", sub: "Via portal" },
                { label: "Conversão", value: "25%", sub: "Taxa de adoção" }
              ].map((metric, i) => (
                <motion.div 
                  key={i} 
                  className="bg-white p-8 rounded-3xl shadow-lg text-center border border-slate-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{metric.label}</p>
                  <p className="text-4xl font-black text-visual-blue mb-1">{metric.value}</p>
                  <p className="text-xs text-slate-400 font-medium">{metric.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Strategy CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="bg-visual-yellow rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-visual-dark via-transparent to-transparent" />
              </div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <Zap className="w-16 h-16 mx-auto mb-8 text-visual-dark animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-black text-visual-dark mb-6">
                  ESTRATÉGIA AVANÇADA
                </h2>
                <p className="text-xl text-visual-dark/80 mb-10 font-medium">
                  Integração em tempo real: O consultor recebe um alerta quando o cliente monta um pedido no portal. 
                  <strong> "Vi que você montou o pedido, quer que eu finalize?"</strong>
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://portal.visualsuper.com.br" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-visual-dark text-white hover:bg-visual-blue transition-all duration-300 font-bold px-10 py-8 text-xl rounded-full shadow-2xl">
                      Acessar o portal?
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {showLinkModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLinkModal(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-visual-dark">Link do Portal</h3>
                  <button 
                    onClick={() => setShowLinkModal(false)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                </div>
                
                <p className="text-slate-600 mb-6">
                  Copie o link abaixo para enviar aos seus clientes e facilitar o acesso deles.
                </p>

                <div className="flex items-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
                  <span className="flex-1 font-mono text-sm text-visual-blue truncate">
                    portal.visualsuper.com.br
                  </span>
                  <Button 
                    onClick={() => copyToClipboard("https://portal.visualsuper.com.br")}
                    className={`${copied ? 'bg-green-500 hover:bg-green-600' : 'bg-visual-blue hover:bg-visual-blue/90'} text-white rounded-xl transition-all duration-300`}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span className="ml-2">{copied ? "Copiado!" : "Copiar"}</span>
                  </Button>
                </div>

                <Button 
                  onClick={() => setShowLinkModal(false)}
                  variant="outline"
                  className="w-full py-6 rounded-2xl border-slate-200 text-slate-600 font-bold"
                >
                  Fechar
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [value, count, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function RankingList() {
  const [users, setUsers] = useState([
    { id: 1, name: "Carlos Silva", score: 45, trend: "up" },
    { id: 2, name: "Ana Oliveira", score: 38, trend: "up" },
    { id: 3, name: "Roberto Santos", score: 32, trend: "down" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prevUsers => {
        const newUsers = [...prevUsers];
        // Simple shuffle logic to simulate position changes
        for (let i = newUsers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newUsers[i], newUsers[j]] = [newUsers[j], newUsers[i]];
        }
        return newUsers;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {users.map((user, i) => (
        <motion.div 
          key={user.id} 
          layout
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            layout: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-colors duration-500 ${i === 0 ? 'bg-visual-yellow text-visual-dark' : 'bg-slate-300'}`}>
            {i + 1}º
          </div>
          <div className="flex-1">
            <p className="font-bold text-slate-800">{user.name}</p>
            <p className="text-sm text-slate-500">{user.score} Clientes</p>
          </div>
          <motion.div 
            animate={{ 
              y: user.trend === "up" ? [0, -4, 0] : [0, 4, 0],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`font-bold ${user.trend === "up" ? "text-green-500" : "text-visual-blue"}`}
          >
            {user.trend === "up" ? "↑" : "↓"}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
