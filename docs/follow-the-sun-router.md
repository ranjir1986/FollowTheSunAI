# Follow-The-Sun Routing Agent

## Purpose

The Follow-The-Sun Routing Agent extends ticket classification by identifying the geographic region responsible for supporting a ticket.

## Business Problem

Global support organizations need to determine:

- Issue Category
- Priority
- Resolver Team
- Support Region

Manual assignment introduces delays and inconsistencies.

## Solution

The agent analyzes ticket descriptions and determines:

- Category
- Priority
- Assigned Team
- Region

## Supported Regions

### EMEA

Keyword:
Germany

### APAC

Keyword:
Japan

### AMER

Keyword:
USA

## Example

Input:

VPN issue reported by Germany office

Output:

Category: Network
Priority: P2
Assigned Team: Network Operations
Region: EMEA

## Business Value

- Faster ticket routing
- Reduced manual effort
- Consistent assignment process
- Support for Follow-The-Sun operations

## Future Enhancements

- Additional countries
- Time-zone aware routing
- ServiceNow integration
- AI-powered classification
- AWS deployment