export const income_tax_rate = [
    {   
        "id": 0,
        "income": "$0 - $18,200",
        "tax_rate": 0,
        "tax_amount": "$0"
    },
    {
        "id": 1,
        "income": "$18,201 - $45,000",
        "tax_rate": 19,
        "tax_amount": "Nil + 19% of excess over $18,200"
    },
    {
        "id": 2,
        "income": "$45,001 - $120,000",
        "tax_rate": 32.5,
        "tax_amount": "$5,902 + 32.5% of excess over $45,001"
    },
    {
        "id": 3,
        "income": "$120,001 - $180,000",
        "tax_rate": 32.5,
        "tax_amount": "$29,467 + 37% of excess over $120,000"
    },
    {
        "id": 4,
        "income": "$180,001 and over",
        "tax_rate": 45,
        "tax_amount": "$51,667 + 45% of excess over $180,000"
    }
]
