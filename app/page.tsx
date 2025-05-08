"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, MessageSquare, Award, ChevronRight, User, Bell, FileText } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-violet-50 to-indigo-100 overflow-hidden">
      {/* Floating 3D elements in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-purple-300 to-purple-400 opacity-20 blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "15%" }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-300 to-cyan-300 opacity-20 blur-xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ top: "30%", right: "10%" }}
        />
        <motion.div
          className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-indigo-300 to-indigo-400 opacity-20 blur-xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ bottom: "15%", left: "25%" }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 pt-8 pb-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent">
              EduSync
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5 text-violet-700" />
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-6 pt-4 pb-8 flex flex-col">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Ta vie scolaire,
            <br />
            <span className="text-violet-700">réinventée.</span>
          </h2>
          <p className="text-slate-600 mb-6">
            Organise tes cours, devoirs et activités en un seul endroit. Simple, intuitif et conçu pour toi.
          </p>

          {/* 3D Card */}
          <motion.div
            className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-5 overflow-hidden shadow-xl"
            initial={{ rotateX: 10, rotateZ: -5 }}
            animate={{
              rotateX: [10, 0, 10],
              rotateZ: [-5, 0, -5],
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 6,
              ease: "easeInOut",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white opacity-20 blur-xl transform translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white opacity-10 blur-xl transform -translate-x-10 translate-y-10"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-white text-lg font-semibold">Prochain cours</h3>
                <p className="text-indigo-100 text-sm mt-1">Mathématiques - Salle B204</p>
                <div className="flex items-center mt-2">
                  <Calendar className="w-4 h-4 text-indigo-200" />
                  <span className="text-indigo-100 text-sm ml-2">Aujourd'hui, 14:00 - 16:00</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-indigo-600 flex items-center justify-center text-xs text-white font-medium">
                    JD
                  </div>
                  <div className="w-8 h-8 rounded-full bg-indigo-300 border-2 border-indigo-600 flex items-center justify-center text-xs text-white font-medium">
                    ML
                  </div>
                  <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-indigo-600 flex items-center justify-center text-xs text-white font-medium">
                    +3
                  </div>
                </div>
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                  Voir détails
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Accès rapide</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <Calendar className="w-5 h-5" />, title: "Emploi du temps", color: "from-pink-500 to-rose-500" },
              { icon: <FileText className="w-5 h-5" />, title: "Mes devoirs", color: "from-amber-500 to-orange-500" },
              { icon: <MessageSquare className="w-5 h-5" />, title: "Messages", color: "from-emerald-500 to-teal-500" },
              { icon: <Award className="w-5 h-5" />, title: "Notes", color: "from-blue-500 to-cyan-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${item.color} p-4 rounded-xl shadow-lg`}
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h4 className="text-white font-medium text-sm">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Login/Signup Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Commence dès maintenant</h3>
            <p className="text-slate-600 text-sm mb-4">Connecte-toi pour accéder à tous tes cours et activités</p>

            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white">
                Se connecter
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>

              <Button variant="outline" className="w-full border-violet-200 text-violet-700 hover:bg-violet-50">
                <User className="w-4 h-4 mr-2" />
                Créer un compte
              </Button>
            </div>

            <div className="mt-4 text-center">
              <Link href="#" className="text-xs text-violet-600 hover:underline">
                Continuer en tant qu'invité
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-6">« Organise ta réussite, chaque jour. »</p>
        </motion.div>
      </main>
    </div>
  )
}
