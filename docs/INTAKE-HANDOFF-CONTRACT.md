# Intake Handoff Contract

## Purpose

SparkCommands.com sends qualified visitors to `https://start.sparkcommands.com` for project intake. Package context and campaign context should survive that handoff without including private visitor data in the URL.

## Sending Application

- Source: SparkCommands.com production website
- Current implementation: Vite/React SPA
- Receiving app: `https://start.sparkcommands.com`

The intake repository is not present in this workspace, so this phase implements the SparkCommands.com sending side and documents the receiver-side requirements.

## Query Parameters

| Parameter | Required | Description |
|---|---:|---|
| `package` | No | Human-readable package name selected on SparkCommands.com. |
| `package_id` | No | Stable internal package identifier from `websitePricingPackages`. |
| `source` | Yes | Sending source. Current value: `sparkcommands.com`. |
| `campaign` | No | Campaign value if present or intentionally set. |
| `utm_source` | No | Preserved from the current SparkCommands.com URL when present. |
| `utm_medium` | No | Preserved from the current SparkCommands.com URL when present. |
| `utm_campaign` | No | Preserved from the current SparkCommands.com URL when present. |
| `utm_content` | No | Preserved from the current SparkCommands.com URL when present. |

Only available values should be sent. Do not invent analytics values.

## Allowed Package Values

Package IDs must stay aligned with the active `websitePricingPackages` values:

| Package | `package_id` |
|---|---|
| Starter Website | `starter-website` |
| Spark Partnership Program | `spark-partnership` |
| Ownership Website | `ownership-website` |
| Custom Applications | `custom-applications` |

## Example URLs

```text
https://start.sparkcommands.com/?source=sparkcommands.com
https://start.sparkcommands.com/?source=sparkcommands.com&package=Spark+Partnership+Program&package_id=spark-partnership
https://start.sparkcommands.com/?source=sparkcommands.com&package=Starter+Website&package_id=starter-website&utm_source=instagram&utm_medium=social&utm_campaign=august-launch
```

## Fallback Behavior

If no package is selected, SparkCommands.com sends only `source` and any available campaign or UTM parameters.

If the intake app does not recognize a package ID, it should fall back to the normal package-selection flow and should not block the visitor.

## Security Considerations

- Do not place private visitor data in URL parameters.
- Do not trust query parameters as authoritative pricing or contract terms.
- Confirm final pricing, scope, payment schedule, and package fit in the written proposal.
- Validate package IDs on the receiving side against the approved package list.
- Preserve Formspree payload field names unless downstream processing is updated.

## Receiver-Side Requirements

The intake app should:

- Read `package` and `package_id`.
- Validate `package_id` against the allowed list.
- Preselect the matching package when valid.
- Preserve UTM/campaign values in hidden fields.
- Display the selected package and price from its own trusted pricing source.
- Clearly state that intake submission does not create a contract or payment.
- Gracefully ignore unknown parameters.

## Test Cases

1. Generic Start Intake link sends `source=sparkcommands.com`.
2. Partnership CTA sends `package=Spark Partnership Program` and `package_id=spark-partnership`.
3. Each pricing card sends its own package ID unchanged.
4. Existing `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `campaign` values are preserved.
5. URL values are encoded safely.
6. No form-entered personal data appears in the URL.
7. Intake app falls back when package ID is missing or unknown.
