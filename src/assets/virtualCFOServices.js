// src/assets/virtualCFOServices.js

// High-quality, reliable image URLs from trusted sources
const IMAGE_BASE = {
  FINANCE: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
  TAX: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818',
  DOCUMENTS: 'https://images.unsplash.com/photo-1581093450025-7d736d9085f1',
  CHARTS: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  TECH: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
};

export const cfo = {
  overview: "A Virtual CFO provides high-level financial strategy and management for businesses on a flexible, outsourced basis.",
  types: [
    {
      id: 1,
      type: "Financial Strategy & Planning",
      description: "Helps businesses create long-term financial roadmaps including growth targets and fundraising plans.",
      example: "Developing a 5-year financial plan for a tech startup preparing for Series A funding.",
      image: `${IMAGE_BASE.FINANCE}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
    },
    {
      id: 2,
      type: "Cash Flow Management",
      description: "Monitors and optimizes cash flow to prevent liquidity issues.",
      example: "Implementing weekly cash flow forecasts for an e-commerce business.",
      image: `${IMAGE_BASE.FINANCE}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&fit=facearea&facepad=2`
    },
    // ... other CFO types
  ]
};

export const RFP = {
  overview: "Retirement & Financial Planning involves creating strategies to ensure financial security during retirement.",
  types: [
    {
      id: 1,
      type: "Retirement Savings Plans",
      description: "Guides individuals on tax-advantaged accounts like 401(k)s, IRAs, or pensions.",
      example: "Maximizing 401(k) contributions with employer matching for a mid-career professional.",
      image: `${IMAGE_BASE.DOCUMENTS}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
    },
    // ... other RFP types
  ]
};

export const PayrollServices = {
  overview: "Payroll Services encompass the management of employee compensation, tax withholdings, and compliance.",
  types: [
    {
      id: 1,
      type: "Payroll Processing",
      description: "Handles calculation of wages, deductions, and net pay for employees.",
      example: "Processing biweekly payroll for a 50-employee small business.",
      image: `${IMAGE_BASE.FINANCE}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&fit=facearea&facepad=3`
    },
    // ... other Payroll types
  ]
};

export const BusinessAdvisory = {
  overview: "Business Advisory services provide expert guidance to help businesses improve performance and solve problems.",
  types: [
    {
      id: 1,
      type: "Strategic Planning",
      description: "Assists in developing long-term business strategies and objectives.",
      example: "Creating a market expansion strategy for a retail business.",
      image: `${IMAGE_BASE.CHARTS}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
    }
    // ... other Business Advisory types
  ]
};

export const AuditAssurance = {
  overview: "Audit & Assurance services provide independent verification of financial statements and business processes.",
  types: [
    {
      id: 1,
      type: "Financial Statement Audit",
      description: "Examines financial records to ensure accuracy and compliance with standards.",
      example: "Conducting an annual audit for a publicly traded company.",
      image: `${IMAGE_BASE.DOCUMENTS}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
    }
    // ... other Audit & Assurance types
  ]
};

export const AccountingBookkeeping = {
  overview: "Accounting & Bookkeeping services maintain accurate financial records for businesses of all sizes.",
  types: [
    {
      id: 1,
      type: "Monthly Bookkeeping",
      description: "Maintains day-to-day financial records and transactions.",
      example: "Managing accounts payable/receivable for a small consulting firm.",
      image: `${IMAGE_BASE.FINANCE}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
    }
    // ... other Accounting & Bookkeeping types
  ]
};

export const TaxServices = {
  overview: "Tax Services help businesses and individuals comply with tax laws while minimizing tax liability.",
  types: [
    {
      id: 1,
      type: "Tax Preparation & Filing",
      description: "Prepares and files accurate tax returns for businesses and individuals.",
      example: "Filing quarterly estimated taxes for a freelance professional.",
      image: `${IMAGE_BASE.TAX}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
    }
    // ... other Tax Services types
  ]
};

export default {
  cfo,
  RFP,
  PayrollServices,
  BusinessAdvisory,
  AuditAssurance,
  AccountingBookkeeping,
  TaxServices
};