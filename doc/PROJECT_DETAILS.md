# Project Details: ScholarAI

## Overview & Concept

ScholarAI is a next-generation deep research platform built in the spirit of "Perplexity but customizable".

Instead of returning a short answer only, the system uses autonomous agents to execute a multi-step research workflow:

- planning the research path
- retrieving data in parallel
- validating sources
- synthesizing a professional academic report

## Key Features

- **Multi-step Planning:** The agent analyzes complex topics and breaks them into 3-5 sub-questions to improve search coverage.
- **Parallel Agentic Search:** The system queries multiple search and retrieval tools in parallel, including Tavily and Jina, to collect evidence from many sources within seconds.
- **Source Credibility Scoring:** Each source is evaluated automatically against academic credibility criteria.
- **Live Reasoning Trace:** Users can observe the agent's reasoning and action trace in real time through live logs.
- **Structured Synthesis:** Final output is generated as a structured Markdown report with citations, a table of contents, and an executive summary.
- **Evidence Matrix:** Evidence is mapped to highlight agreement, conflict, and comparative strength across sources.

## Technical Depth

- **Agent Orchestration:** LangGraph manages complex state transitions and reflection loops for the research agents.
- **Concurrency & Performance:** Python `asyncio.gather` is used to parallelize external tool and API calls.
- **Token Management:** Context compression is used to keep large evidence sets within model token limits.
- **Observability:** Langfuse is used to track execution steps, latency, and agent cost in detail.

## Tech Stack

- **Frontend:** Next.js 14 App Router, TypeScript, Tailwind CSS
- **Backend:** FastAPI, Python, LangGraph, LangChain
- **AI Models:** Claude 3.5 Sonnet, GPT-4o
- **Tools & APIs:** Tavily, Jina Reader, Server-Sent Events for streaming

## UI/UX Design System

- **Aesthetic:** Modern Academic — bright, clean, minimal, and technically credible
- **Hierarchy:** High information density with strong readability
- **Navigation:** Standard app shell with a fixed sidebar to create a professional research-tool feel

## User Flow: ScholarAI Deep Research Journey

### 1. Awareness & Entry

- **Screen:** `Introduction & Features`
- **User Action:** The user explores the 3-step process: Plan -> Search -> Synthesize
- **Goal:** Build trust in the agent's research methodology

### 2. Initiation

- **Screen:** `Research Dashboard`
- **User Action:** The user enters a complex research topic into the `Primary Inquiry` field
- **Transition:** The user clicks `Deploy Agent` to start the workflow

### 3. Active Reasoning & Tracing

- **Screen:** `Agent Planning & Trace`
- **Step 1 - Planning:** The user sees the topic decomposed into 3-5 sub-questions
- **Step 2 - Parallel Search:** The user tracks progress while the agent calls Tavily and Jina Reader in parallel
- **Step 3 - Analysis:** The user watches live logs as extraction and cross-validation occur
- **Technical Value:** This stage exposes parallel execution, orchestration, and reasoning depth

### 4. Output & Synthesis

- **Screen:** `Research Synthesis Report`
- **User Output:** The user receives a complete report with:
- `Executive Summary`
- technical comparison tables
- professional citations
- **Final Actions:** Export to PDF or Markdown

### 5. Management

- **User Action:** The user returns to the dashboard to monitor active dossiers or review research history

## Detailed Guides

- [Architecture & Logic Placement](./ARCHITECTURE.md)
- [Code Review Graph](./CODE_REVIEW_GRAPH.md)
- [Token-Optimized Graph Workflow](./code-review-graph-token-workflow.md)
- [Testing Workflow](./TESTING.md)
