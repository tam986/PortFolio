import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { fadeUp, staggerContainer } from '@/animations/motionVariants'
import { CheckCircle, Lock, PlusCircle } from 'lucide-react'

const initialForm = {
  title: '',
  description: '',
  category: '',
  tags: '',
  liveUrl: '',
  repoUrl: '',
}

export default function Admin() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      ...form,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
    }
    console.log('📝 Project submitted:', data)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm(initialForm)
    }, 3000)
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: 'rgba(255,107,53,0.05)',
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-10"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full glass border border-white/10 text-xs text-slate-400 font-medium flex items-center gap-2">
              <Lock size={10} className="text-[#FF6B35]" />
              Admin Only
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white mb-2">
            Add <span className="text-[#FF6B35]">New Project</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-500 text-sm">
            Fill in the details below. This will be logged to console (no backend yet).
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Card className="border-white/[0.08]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <PlusCircle size={18} className="text-[#FF6B35]" />
                Project Details
              </CardTitle>
              <CardDescription>All fields marked with * are required.</CardDescription>
            </CardHeader>

            <CardContent>
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <CheckCircle size={48} className="text-[#FF6B35]" />
                  <h3 className="text-xl font-bold text-white">Project Logged!</h3>
                  <p className="text-slate-500 text-sm">Check your browser console for the output.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Title */}
                  <div className="space-y-1.5">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g. AI Dashboard"
                      value={form.title}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5">
                    <Label htmlFor="description">Description *</Label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Brief project description..."
                      value={form.description}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="flex w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 focus:border-[#00E5FF]/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-1.5">
                    <Label htmlFor="category">Category *</Label>
                    <Input
                      id="category"
                      name="category"
                      placeholder="e.g. Web App, AI/ML, Mobile"
                      value={form.category}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Tags */}
                  <div className="space-y-1.5">
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      name="tags"
                      placeholder="e.g. React, TypeScript, Node.js"
                      value={form.tags}
                      onChange={handleChange}
                    />
                  </div>

                  {/* URLs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="liveUrl">Live URL</Label>
                      <Input
                        id="liveUrl"
                        name="liveUrl"
                        type="url"
                        placeholder="https://..."
                        value={form.liveUrl}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="repoUrl">Repo URL</Label>
                      <Input
                        id="repoUrl"
                        name="repoUrl"
                        type="url"
                        placeholder="https://github.com/..."
                        value={form.repoUrl}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full mt-2">
                    Add Project
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
