# Animation and Motion Specification

## Principle

Motion should explain the engineering story. It should not turn the README into a decorative animation gallery.

## 1. Hero loop

Purpose: immediately communicate the breadth of the engineering identity.

Implementation: repository-hosted GIF generated from a fixed frame sequence.

GitHub compatibility: high. GIFs are supported as images.

Fallback: `assets/hero-static.svg`.

Performance: keep dimensions modest and frame count low enough that the file remains small. The supplied hero GIF is under 300 KB.

Accessibility: include descriptive alt text; the static SVG can be substituted by readers who disable images or motion.

## 2. Systems diagram

Purpose: visually connect frontend, API, data, asynchronous processing, observability, and infrastructure.

Implementation: repository-hosted SVG with simple geometric shapes and arrows.

GitHub compatibility: high for ordinary SVG image embedding.

Fallback: alt text and surrounding prose explain the same concepts.

Performance: one local SVG, no runtime requests.

Accessibility: SVG contains an accessible title/description and the README provides nearby explanatory text.

## 3. Contribution ribbon

Purpose: add a distinctive visual interpretation of engineering activity without pretending to be GitHub's actual contribution graph.

Implementation: repository-hosted SVG. It is intentionally a conceptual graphic, not a generated claim about contribution volume.

GitHub compatibility: high.

Fallback: GitHub's native contribution calendar remains the source of truth.

Performance: tiny local asset.

Accessibility: explicit alt text and explanatory prose.

## 4. Profile metrics

Purpose: show stable, automatically refreshable profile metadata.

Implementation: local SVG refreshed by a scheduled GitHub Actions workflow using the public GitHub API.

GitHub compatibility: high because the rendered result is a normal repository asset.

Fallback: remove the image without affecting the rest of the profile.

Performance: one local image in the README. The workflow runs outside the README render path.

Data integrity: the metric set is intentionally limited to API fields that are unambiguous: public repositories, followers, and following.

## 5. Section reveals

Not used in the README itself. GitHub README Markdown does not provide a reliable client-side animation layer for custom section entrance effects. Those interactions belong on the actual portfolio site, not the profile README.

## 6. Contribution snake

Not used as a primary element. A contribution snake is visually interesting but can become a clone of common developer README patterns and often introduces additional asset-generation complexity. A simpler local activity ribbon is used instead.
