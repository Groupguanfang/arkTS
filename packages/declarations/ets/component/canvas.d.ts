/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 */
/**
 * Import the drawing canvas type object for Canvas.
 *
 * @typedef { import('../api/@ohos.graphics.drawing').default.Canvas } DrawingCanvas
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type DrawingCanvas = import('../api/@ohos.graphics.drawing').default.Canvas;
/**
 * Filling style algorithm, which determines whether a point is within or outside the path. The following
 *    two configurations are supported:
 * "evenodd": odd and even round rule
 * "nonzero": (Default) Non-zero Wrap Rules
 *
 * @typedef { "evenodd" | "nonzero" } CanvasFillRule
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Filling style algorithm, which determines whether a point is within or outside the path. The following
 *    two configurations are supported:
 * "evenodd": odd and even round rule
 * "nonzero": (Default) Non-zero Wrap Rules
 *
 * @typedef { "evenodd" | "nonzero" } CanvasFillRule
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Filling style algorithm, which determines whether a point is within or outside the path. The following
 *    two configurations are supported:
 * "evenodd": odd and even round rule
 * "nonzero": (Default) Non-zero Wrap Rules
 *
 * @typedef { "evenodd" | "nonzero" } CanvasFillRule
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Filling style algorithm, which determines whether a point is within or outside the path. The following
 *    two configurations are supported:
 * "evenodd": odd and even round rule
 * "nonzero": (Default) Non-zero Wrap Rules
 *
 * @typedef { "evenodd" | "nonzero" } CanvasFillRule
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type CanvasFillRule = "evenodd" | "nonzero";
/**
 * Specifies the attribute of drawing the end of each line segment. The following configurations are supported:
 * "butt": (Default) Segment Ends in Square
 * "round": Segment ends in a circle
 * "square": The end of the segment ends in a square, but a rectangular area is added that is the same width
 *    as the segment and is half the thickness of the segment.
 *
 * @typedef { "butt" | "round" | "square" } CanvasLineCap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Specifies the attribute of drawing the end of each line segment. The following configurations are supported:
 * "butt": (Default) Segment Ends in Square
 * "round": Segment ends in a circle
 * "square": The end of the segment ends in a square, but a rectangular area is added that is the same width
 *    as the segment and is half the thickness of the segment.
 *
 * @typedef { "butt" | "round" | "square" } CanvasLineCap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Specifies the attribute of drawing the end of each line segment. The following configurations are supported:
 * "butt": (Default) Segment Ends in Square
 * "round": Segment ends in a circle
 * "square": The end of the segment ends in a square, but a rectangular area is added that is the same width
 *    as the segment and is half the thickness of the segment.
 *
 * @typedef { "butt" | "round" | "square" } CanvasLineCap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Specifies the attribute of drawing the end of each line segment. The following configurations are supported:
 * "butt": (Default) Segment Ends in Square
 * "round": Segment ends in a circle
 * "square": The end of the segment ends in a square, but a rectangular area is added that is the same width
 *    as the segment and is half the thickness of the segment.
 *
 * @typedef { "butt" | "round" | "square" } CanvasLineCap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type CanvasLineCap = "butt" | "round" | "square";
/**
 * Sets the attribute of how two connected parts (line segments, arcs, and curves) whose length is not 0
 *    are connected together. The following three configurations are supported:
 * "bevel": Fill the ends of the connected sections with an additional triangle-base area,
 *    each with its own independent rectangular corner.
 * "miter": (Default) An additional diamond region is formed by extending the outer edges of the connected portions
 *    so that they intersect at a point.
 * "round": Draw the shape of the corner by filling in an additional sector with the center at the end of the
 *    connected section. The radius of the fillet is the width of the segment.
 *
 * @typedef { "bevel" | "miter" | "round" } CanvasLineJoin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Sets the attribute of how two connected parts (line segments, arcs, and curves) whose length is not 0
 *    are connected together. The following three configurations are supported:
 * "bevel": Fill the ends of the connected sections with an additional triangle-base area,
 *    each with its own independent rectangular corner.
 * "miter": (Default) An additional diamond region is formed by extending the outer edges of the connected portions
 *    so that they intersect at a point.
 * "round": Draw the shape of the corner by filling in an additional sector with the center at the end of the
 *    connected section. The radius of the fillet is the width of the segment.
 *
 * @typedef { "bevel" | "miter" | "round" } CanvasLineJoin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Sets the attribute of how two connected parts (line segments, arcs, and curves) whose length is not 0
 *    are connected together. The following three configurations are supported:
 * "bevel": Fill the ends of the connected sections with an additional triangle-base area,
 *    each with its own independent rectangular corner.
 * "miter": (Default) An additional diamond region is formed by extending the outer edges of the connected portions
 *    so that they intersect at a point.
 * "round": Draw the shape of the corner by filling in an additional sector with the center at the end of the
 *    connected section. The radius of the fillet is the width of the segment.
 *
 * @typedef { "bevel" | "miter" | "round" } CanvasLineJoin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Sets the attribute of how two connected parts (line segments, arcs, and curves) whose length is not 0
 *    are connected together. The following three configurations are supported:
 * "bevel": Fill the ends of the connected sections with an additional triangle-base area,
 *    each with its own independent rectangular corner.
 * "miter": (Default) An additional diamond region is formed by extending the outer edges of the connected portions
 *    so that they intersect at a point.
 * "round": Draw the shape of the corner by filling in an additional sector with the center at the end of the
 *    connected section. The radius of the fillet is the width of the segment.
 *
 * @typedef { "bevel" | "miter" | "round" } CanvasLineJoin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type CanvasLineJoin = "bevel" | "miter" | "round";
/**
 * Indicates the attribute of the current text direction. The options are as follows:
 * "inherit": (Default) Inherit current Canvas component settings
 * "ltr": The text direction is left to right.
 * "rtl": The text direction is from right to left.
 *
 * @typedef { "inherit" | "ltr" | "rtl" } CanvasDirection
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Indicates the attribute of the current text direction. The options are as follows:
 * "inherit": (Default) Inherit current Canvas component settings
 * "ltr": The text direction is left to right.
 * "rtl": The text direction is from right to left.
 *
 * @typedef { "inherit" | "ltr" | "rtl" } CanvasDirection
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Indicates the attribute of the current text direction. The options are as follows:
 * "inherit": (Default) Inherit current Canvas component settings
 * "ltr": The text direction is left to right.
 * "rtl": The text direction is from right to left.
 *
 * @typedef { "inherit" | "ltr" | "rtl" } CanvasDirection
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Indicates the attribute of the current text direction. The options are as follows:
 * "inherit": (Default) Inherit current Canvas component settings
 * "ltr": The text direction is left to right.
 * "rtl": The text direction is from right to left.
 *
 * @typedef { "inherit" | "ltr" | "rtl" } CanvasDirection
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type CanvasDirection = "inherit" | "ltr" | "rtl";
/**
 * Describes the alignment mode for drawing text. The options are as follows:
 * "center": The text is centered.
 * "end": Where text aligns lines end (Left alignment refers to the local from left to right,
 *    and right alignment refers to the local from right to left)
 * "left": The text is left-aligned.
 * "right": The text is right-aligned.
 * "start": (Default) Where the text snap line begins (Left alignment refers to the local from left to right,
 *    and right alignment refers to the local from right to left)
 *
 * @typedef { "center" | "end" | "left" | "right" | "start" } CanvasTextAlign
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Describes the alignment mode for drawing text. The options are as follows:
 * "center": The text is centered.
 * "end": Where text aligns lines end (Left alignment refers to the local from left to right,
 *    and right alignment refers to the local from right to left)
 * "left": The text is left-aligned.
 * "right": The text is right-aligned.
 * "start": (Default) Where the text snap line begins (Left alignment refers to the local from left to right,
 *    and right alignment refers to the local from right to left)
 *
 * @typedef { "center" | "end" | "left" | "right" | "start" } CanvasTextAlign
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Describes the alignment mode for drawing text. The options are as follows:
 * "center": The text is centered.
 * "end": Where text aligns lines end (Left alignment refers to the local from left to right,
 *    and right alignment refers to the local from right to left)
 * "left": The text is left-aligned.
 * "right": The text is right-aligned.
 * "start": (Default) Where the text snap line begins (Left alignment refers to the local from left to right,
 *    and right alignment refers to the local from right to left)
 *
 * @typedef { "center" | "end" | "left" | "right" | "start" } CanvasTextAlign
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Describes the alignment mode for drawing text. The options are as follows:
 * "center": The text is centered.
 * "end": Where text aligns lines end (Left alignment refers to the local from left to right,
 *    and right alignment refers to the local from right to left)
 * "left": The text is left-aligned.
 * "right": The text is right-aligned.
 * "start": (Default) Where the text snap line begins (Left alignment refers to the local from left to right,
 *    and right alignment refers to the local from right to left)
 *
 * @typedef { "center" | "end" | "left" | "right" | "start" } CanvasTextAlign
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type CanvasTextAlign = "center" | "end" | "left" | "right" | "start";
/**
 * Text baseline, which supports the following configurations:
 * "alphabetic": (Default) The text baseline is the standard letter baseline.
 * "bottom": The text baseline is at the bottom of the text block. The difference between the ideographic baseline
 *    and the ideographic baseline is that the ideographic baseline does not need to consider downlink letters.
 * "hanging": The text baseline is a hanging baseline.
 * "ideographic": The text baseline is the ideographic baseline; If the character itself exceeds the alphabetic
 *    baseline, the ideographic baseline is at the bottom of the character itself.
 * "middle": The text baseline is in the middle of the text block.
 * "top": The text baseline is at the top of the text block.
 *
 * @typedef { "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top" } CanvasTextBaseline
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Text baseline, which supports the following configurations:
 * "alphabetic": (Default) The text baseline is the standard letter baseline.
 * "bottom": The text baseline is at the bottom of the text block. The difference between the ideographic baseline
 *    and the ideographic baseline is that the ideographic baseline does not need to consider downlink letters.
 * "hanging": The text baseline is a hanging baseline.
 * "ideographic": The text baseline is the ideographic baseline; If the character itself exceeds the alphabetic
 *    baseline, the ideographic baseline is at the bottom of the character itself.
 * "middle": The text baseline is in the middle of the text block.
 * "top": The text baseline is at the top of the text block.
 *
 * @typedef { "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top" } CanvasTextBaseline
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Text baseline, which supports the following configurations:
 * "alphabetic": (Default) The text baseline is the standard letter baseline.
 * "bottom": The text baseline is at the bottom of the text block. The difference between the ideographic baseline
 *    and the ideographic baseline is that the ideographic baseline does not need to consider downlink letters.
 * "hanging": The text baseline is a hanging baseline.
 * "ideographic": The text baseline is the ideographic baseline; If the character itself exceeds the alphabetic
 *    baseline, the ideographic baseline is at the bottom of the character itself.
 * "middle": The text baseline is in the middle of the text block.
 * "top": The text baseline is at the top of the text block.
 *
 * @typedef { "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top" } CanvasTextBaseline
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Text baseline, which supports the following configurations:
 * "alphabetic": (Default) The text baseline is the standard letter baseline.
 * "bottom": The text baseline is at the bottom of the text block. The difference between the ideographic baseline
 *    and the ideographic baseline is that the ideographic baseline does not need to consider downlink letters.
 * "hanging": The text baseline is a hanging baseline.
 * "ideographic": The text baseline is the ideographic baseline; If the character itself exceeds the alphabetic
 *    baseline, the ideographic baseline is at the bottom of the character itself.
 * "middle": The text baseline is in the middle of the text block.
 * "top": The text baseline is at the top of the text block.
 *
 * @typedef { "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top" } CanvasTextBaseline
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top";
/**
 * Sets the image smoothness attribute. The options are as follows:
 * "high": height
 * "low": (default)low
 * "medium": medium
 *
 * @typedef { "high" | "low" | "medium" } ImageSmoothingQuality
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Sets the image smoothness attribute. The options are as follows:
 * "high": height
 * "low": (default)low
 * "medium": medium
 *
 * @typedef { "high" | "low" | "medium" } ImageSmoothingQuality
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Sets the image smoothness attribute. The options are as follows:
 * "high": height
 * "low": (default)low
 * "medium": medium
 *
 * @typedef { "high" | "low" | "medium" } ImageSmoothingQuality
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Sets the image smoothness attribute. The options are as follows:
 * "high": height
 * "low": (default)low
 * "medium": medium
 *
 * @typedef { "high" | "low" | "medium" } ImageSmoothingQuality
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type ImageSmoothingQuality = "high" | "low" | "medium";
/**
 * Import the frame node type object for Canvas.
 *
 * @typedef { import('../api/arkui/FrameNode').FrameNode } FrameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 13
 */
declare type FrameNode = import('../api/arkui/FrameNode').FrameNode;
/**
 * Opaque objects that describe gradients, created by createLinearGradient() or createRadialGradient()
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Opaque objects that describe gradients, created by createLinearGradient() or createRadialGradient()
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Opaque objects that describe gradients, created by createLinearGradient() or createRadialGradient()
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Opaque objects that describe gradients, created by createLinearGradient() or createRadialGradient()
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CanvasGradient {
    /**
     * Add a breakpoint defined by offset and color to the gradient
     *
     * @param { number } offset - Value between 0 and 1, out of range throws INDEX_SIZE_ERR error
     * @param { string } color - CSS color value <color>. If the color value cannot be resolved to a valid CSS color value <color>
     *    a SYNTAX_ERR error is thrown.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Add a breakpoint defined by offset and color to the gradient
     *
     * @param { number } offset - Value between 0 and 1, out of range throws INDEX_SIZE_ERR error
     * @param { string } color - CSS color value <color>. If the color value cannot be resolved to a valid CSS color value <color>
     *    a SYNTAX_ERR error is thrown.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Add a breakpoint defined by offset and color to the gradient
     *
     * @param { number } offset - Value between 0 and 1, out of range throws INDEX_SIZE_ERR error
     * @param { string } color - Set the gradient color.
     *    a SYNTAX_ERR error is thrown.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Add a breakpoint defined by offset and color to the gradient
     *
     * @param { number } offset - Value between 0 and 1, out of range throws INDEX_SIZE_ERR error
     * @param { string } color - Set the gradient color.
     *    a SYNTAX_ERR error is thrown.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    addColorStop(offset: number, color: string): void;
}
/**
 * Path object, which provides basic methods for drawing paths.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Path object, which provides basic methods for drawing paths.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Path object, which provides basic methods for drawing paths.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Path object, which provides basic methods for drawing paths.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CanvasPath {
    /**
     * Draw an arc path
     *
     * @param { number } x - The x-axis coordinate of the center (center of the circle) of the arc.
     * @param { number } y - The y-axis coordinate of the center (center of the circle) of the arc.
     * @param { number } radius - Radius of the arc.
     * @param { number } startAngle - Start point of an arc, which starts to be calculated in the x-axis direction. The unit is radian.
     * @param { number } endAngle - The end point of the arc, in radians.
     * @param { boolean } counterclockwise - If the value is true, the arc is drawn counterclockwise. Otherwise,
     *    the arc is drawn clockwise. The default value is false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draw an arc path
     *
     * @param { number } x - The x-axis coordinate of the center (center of the circle) of the arc.
     * @param { number } y - The y-axis coordinate of the center (center of the circle) of the arc.
     * @param { number } radius - Radius of the arc.
     * @param { number } startAngle - Start point of an arc, which starts to be calculated in the x-axis direction. The unit is radian.
     * @param { number } endAngle - The end point of the arc, in radians.
     * @param { boolean } counterclockwise - If the value is true, the arc is drawn counterclockwise. Otherwise,
     *    the arc is drawn clockwise. The default value is false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draw an arc path
     *
     * @param { number } x - The x-axis coordinate of the center (center of the circle) of the arc.
     * @param { number } y - The y-axis coordinate of the center (center of the circle) of the arc.
     * @param { number } radius - Radius of the arc.
     * @param { number } startAngle - Start point of an arc, which starts to be calculated in the x-axis direction. The unit is radian.
     * @param { number } endAngle - The end point of the arc, in radians.
     * @param { boolean } counterclockwise - If the value is true, the arc is drawn counterclockwise. Otherwise,
     *    the arc is drawn clockwise. The default value is false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draw an arc path
     *
     * @param { number } x - The x-axis coordinate of the center (center of the circle) of the arc.
     * @param { number } y - The y-axis coordinate of the center (center of the circle) of the arc.
     * @param { number } radius - Radius of the arc.
     * @param { number } startAngle - Start point of an arc, which starts to be calculated in the x-axis direction. The unit is radian.
     * @param { number } endAngle - The end point of the arc, in radians.
     * @param { boolean } counterclockwise - If the value is true, the arc is drawn counterclockwise. Otherwise,
     *    the arc is drawn clockwise. The default value is false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    /**
     * Draw arc paths based on control points and radius
     *
     * @param { number } x1 - The x-axis coordinate of the first control point.
     * @param { number } y1 - The y-axis coordinate of the first control point.
     * @param { number } x2 - The x-axis coordinate of the second control point.
     * @param { number } y2 - The y-axis coordinate of the second control point.
     * @param { number } radius - Radius of the arc.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draw arc paths based on control points and radius
     *
     * @param { number } x1 - The x-axis coordinate of the first control point.
     * @param { number } y1 - The y-axis coordinate of the first control point.
     * @param { number } x2 - The x-axis coordinate of the second control point.
     * @param { number } y2 - The y-axis coordinate of the second control point.
     * @param { number } radius - Radius of the arc.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draw arc paths based on control points and radius
     *
     * @param { number } x1 - The x-axis coordinate of the first control point.
     * @param { number } y1 - The y-axis coordinate of the first control point.
     * @param { number } x2 - The x-axis coordinate of the second control point.
     * @param { number } y2 - The y-axis coordinate of the second control point.
     * @param { number } radius - Radius of the arc.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draw arc paths based on control points and radius
     *
     * @param { number } x1 - The x-axis coordinate of the first control point.
     * @param { number } y1 - The y-axis coordinate of the first control point.
     * @param { number } x2 - The x-axis coordinate of the second control point.
     * @param { number } y2 - The y-axis coordinate of the second control point.
     * @param { number } radius - Radius of the arc.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * Drawing Cubic Bessel Curve Paths
     *
     * @param { number } cp1x - The x-axis coordinate of the first control point.
     * @param { number } cp1y - The y-axis coordinate of the first control point.
     * @param { number } cp2x - The x-axis coordinate of the second control point.
     * @param { number } cp2y - The y-axis coordinate of the second control point.
     * @param { number } x - x-axis coordinate of the end point.
     * @param { number } y - y-axis coordinate of the end point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Drawing Cubic Bessel Curve Paths
     *
     * @param { number } cp1x - The x-axis coordinate of the first control point.
     * @param { number } cp1y - The y-axis coordinate of the first control point.
     * @param { number } cp2x - The x-axis coordinate of the second control point.
     * @param { number } cp2y - The y-axis coordinate of the second control point.
     * @param { number } x - x-axis coordinate of the end point.
     * @param { number } y - y-axis coordinate of the end point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Drawing Cubic Bessel Curve Paths
     *
     * @param { number } cp1x - The x-axis coordinate of the first control point.
     * @param { number } cp1y - The y-axis coordinate of the first control point.
     * @param { number } cp2x - The x-axis coordinate of the second control point.
     * @param { number } cp2y - The y-axis coordinate of the second control point.
     * @param { number } x - x-axis coordinate of the end point.
     * @param { number } y - y-axis coordinate of the end point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Drawing Cubic Bessel Curve Paths
     *
     * @param { number } cp1x - The x-axis coordinate of the first control point.
     * @param { number } cp1y - The y-axis coordinate of the first control point.
     * @param { number } cp2x - The x-axis coordinate of the second control point.
     * @param { number } cp2y - The y-axis coordinate of the second control point.
     * @param { number } x - x-axis coordinate of the end point.
     * @param { number } y - y-axis coordinate of the end point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * Returns the pen point to the start point of the current sub-path
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Returns the pen point to the start point of the current sub-path
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Returns the pen point to the start point of the current sub-path
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Returns the pen point to the start point of the current sub-path
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    closePath(): void;
    /**
     * Draw an Elliptic Path
     *
     * @param { number } x - x-axis coordinate of the center of the ellipse.
     * @param { number } y - y-axis coordinate of the center of the ellipse.
     * @param { number } radiusX - Radius of the major axis of the ellipse.
     * @param { number } radiusY - Radius of the minor axis of the ellipse.
     * @param { number } rotation - The rotation angle of the ellipse, in radians (not angular degrees).
     * @param { number } startAngle - The angle of the starting point to be drawn, measured from the x-axis in radians
     *    (not angular degrees).
     * @param { number } endAngle - The angle, in radians, at which the ellipse is to be drawn (not angular degrees).
     * @param { boolean } counterclockwise - If the value is true, the ellipse is drawn counterclockwise. Otherwise,
     *    the ellipse is drawn clockwise. The default value is false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draw an Elliptic Path
     *
     * @param { number } x - x-axis coordinate of the center of the ellipse.
     * @param { number } y - y-axis coordinate of the center of the ellipse.
     * @param { number } radiusX - Radius of the major axis of the ellipse.
     * @param { number } radiusY - Radius of the minor axis of the ellipse.
     * @param { number } rotation - The rotation angle of the ellipse, in radians (not angular degrees).
     * @param { number } startAngle - The angle of the starting point to be drawn, measured from the x-axis in radians
     *    (not angular degrees).
     * @param { number } endAngle - The angle, in radians, at which the ellipse is to be drawn (not angular degrees).
     * @param { boolean } counterclockwise - If the value is true, the ellipse is drawn counterclockwise. Otherwise,
     *    the ellipse is drawn clockwise. The default value is false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draw an Elliptic Path
     *
     * @param { number } x - x-axis coordinate of the center of the ellipse.
     * @param { number } y - y-axis coordinate of the center of the ellipse.
     * @param { number } radiusX - Radius of the major axis of the ellipse.
     * @param { number } radiusY - Radius of the minor axis of the ellipse.
     * @param { number } rotation - The rotation angle of the ellipse, in radians (not angular degrees).
     * @param { number } startAngle - The angle of the starting point to be drawn, measured from the x-axis in radians
     *    (not angular degrees).
     * @param { number } endAngle - The angle, in radians, at which the ellipse is to be drawn (not angular degrees).
     * @param { boolean } counterclockwise - If the value is true, the ellipse is drawn counterclockwise. Otherwise,
     *    the ellipse is drawn clockwise. The default value is false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draw an Elliptic Path
     *
     * @param { number } x - x-axis coordinate of the center of the ellipse.
     * @param { number } y - y-axis coordinate of the center of the ellipse.
     * @param { number } radiusX - Radius of the major axis of the ellipse.
     * @param { number } radiusY - Radius of the minor axis of the ellipse.
     * @param { number } rotation - The rotation angle of the ellipse, in radians (not angular degrees).
     * @param { number } startAngle - The angle of the starting point to be drawn, measured from the x-axis in radians
     *    (not angular degrees).
     * @param { number } endAngle - The angle, in radians, at which the ellipse is to be drawn (not angular degrees).
     * @param { boolean } counterclockwise - If the value is true, the ellipse is drawn counterclockwise. Otherwise,
     *    the ellipse is drawn clockwise. The default value is false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    /**
     * Connect sub-path using straight lines
     *
     * @param { number } x - The x-axis coordinate of the end point of the line.
     * @param { number } y - The y-axis coordinate of the end point of the line.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Connect sub-path using straight lines
     *
     * @param { number } x - The x-axis coordinate of the end point of the line.
     * @param { number } y - The y-axis coordinate of the end point of the line.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Connect sub-path using straight lines
     *
     * @param { number } x - The x-axis coordinate of the end point of the line.
     * @param { number } y - The y-axis coordinate of the end point of the line.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Connect sub-path using straight lines
     *
     * @param { number } x - The x-axis coordinate of the end point of the line.
     * @param { number } y - The y-axis coordinate of the end point of the line.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    lineTo(x: number, y: number): void;
    /**
     * Moves the start point of a new sub-path to the (x, y) coordinate.
     *
     * @param { number } x - The x-axis coordinate of the point.
     * @param { number } y - The y-axis coordinate of the point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Moves the start point of a new sub-path to the (x, y) coordinate.
     *
     * @param { number } x - The x-axis coordinate of the point.
     * @param { number } y - The y-axis coordinate of the point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Moves the start point of a new sub-path to the (x, y) coordinate.
     *
     * @param { number } x - The x-axis coordinate of the point.
     * @param { number } y - The y-axis coordinate of the point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Moves the start point of a new sub-path to the (x, y) coordinate.
     *
     * @param { number } x - The x-axis coordinate of the point.
     * @param { number } y - The y-axis coordinate of the point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    moveTo(x: number, y: number): void;
    /**
     * Draw quadratic Bezier curve paths
     *
     * @param { number } cpx - The x-axis coordinate of the control point.
     * @param { number } cpy - The y-axis coordinate of the control point.
     * @param { number } x - x-axis coordinate of the end point.
     * @param { number } y - y-axis coordinate of the end point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draw quadratic Bezier curve paths
     *
     * @param { number } cpx - The x-axis coordinate of the control point.
     * @param { number } cpy - The y-axis coordinate of the control point.
     * @param { number } x - x-axis coordinate of the end point.
     * @param { number } y - y-axis coordinate of the end point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draw quadratic Bezier curve paths
     *
     * @param { number } cpx - The x-axis coordinate of the control point.
     * @param { number } cpy - The y-axis coordinate of the control point.
     * @param { number } x - x-axis coordinate of the end point.
     * @param { number } y - y-axis coordinate of the end point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draw quadratic Bezier curve paths
     *
     * @param { number } cpx - The x-axis coordinate of the control point.
     * @param { number } cpy - The y-axis coordinate of the control point.
     * @param { number } x - x-axis coordinate of the end point.
     * @param { number } y - y-axis coordinate of the end point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * Draw Rectangular Paths
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draw Rectangular Paths
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draw Rectangular Paths
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draw Rectangular Paths
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    rect(x: number, y: number, w: number, h: number): void;
}
/**
 * 2D path object for path drawing
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 2D path object for path drawing
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * 2D path object for path drawing
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * 2D path object for path drawing
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class Path2D extends CanvasPath {
    /**
     * Adds a path according to the specified path variable.
     *
     * @param { Path2D } path - Indicates the path object to be added.
     * @param { Matrix2D } transform - Transformation matrix of the new trail. The default value is null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Adds a path according to the specified path variable.
     *
     * @param { Path2D } path - Indicates the path object to be added.
     * @param { Matrix2D } transform - Transformation matrix of the new trail. The default value is null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Adds a path according to the specified path variable.
     *
     * @param { Path2D } path - Indicates the path object to be added.
     * @param { Matrix2D } transform - Transformation matrix of the new trail. The default value is null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Adds a path according to the specified path variable.
     *
     * @param { Path2D } path - Indicates the path object to be added.
     * @param { Matrix2D } transform - Transformation matrix of the new trail. The default value is null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    addPath(path: Path2D, transform?: Matrix2D): void;
    /**
     * Create an empty path object.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Create an empty path object.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Create an empty path object.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Create an empty path object.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Create an empty path object.
     *
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    constructor(unit: LengthMetricsUnit);
    /**
     * Create a copy of a path object
     *
     * @param { Path2D } path - Path object to be copied
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Create a copy of a path object
     *
     * @param { Path2D } path - Path object to be copied
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Create a copy of a path object
     *
     * @param { Path2D } path - Path object to be copied
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Create a copy of a path object
     *
     * @param { Path2D } path - Path object to be copied
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor(path: Path2D);
    /**
     * Create a copy of a path object
     *
     * @param { Path2D } path - Path object to be copied
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    constructor(path: Path2D, unit: LengthMetricsUnit);
    /**
     * Create a new path according to the description.
     *
     * @param { string } d - Indicates the path string that compiles with the SVG path description specifications.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Create a new path according to the description.
     *
     * @param { string } d - Indicates the path string that compiles with the SVG path description specifications.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Create a new path according to the description.
     *
     * @param { string } d - Indicates the path string that compiles with the SVG path description specifications.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Create a new path according to the description.
     *
     * @param { string } d - Indicates the path string that compiles with the SVG path description specifications.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor(d: string);
    /**
     * Create a new path according to the description.
     *
     * @param { string } description - Indicates the path string that compiles with the SVG path description specifications.
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    constructor(description: string, unit: LengthMetricsUnit);
}
/**
 * Describes an opaque object of a template, which is created using the createPattern() method.
 *
 * @interface CanvasPattern
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Describes an opaque object of a template, which is created using the createPattern() method.
 *
 * @interface CanvasPattern
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Describes an opaque object of a template, which is created using the createPattern() method.
 *
 * @interface CanvasPattern
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Describes an opaque object of a template, which is created using the createPattern() method.
 *
 * @interface CanvasPattern
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface CanvasPattern {
    /**
     * Adds the matrix transformation effect to the current template.
     *
     * @param { Matrix2D } transform - transformation matrix. The default value is null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Adds the matrix transformation effect to the current template.
     *
     * @param { Matrix2D } transform - transformation matrix. The default value is null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Adds the matrix transformation effect to the current template.
     *
     * @param { Matrix2D } transform - transformation matrix. The default value is null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Adds the matrix transformation effect to the current template.
     *
     * @param { Matrix2D } transform - transformation matrix. The default value is null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    setTransform(transform?: Matrix2D): void;
}
/**
 * Size information of the text
 *
 * @interface TextMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Size information of the text
 *
 * @interface TextMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Size information of the text
 *
 * @interface TextMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Size information of the text
 *
 * @interface TextMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface TextMetrics {
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the top of
     *    the rectangular boundary of the rendered text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the top of
     *    the rectangular boundary of the rendered text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the top of
     *    the rectangular boundary of the rendered text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the top of
     *    the rectangular boundary of the rendered text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly actualBoundingBoxAscent: number;
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the bottom of
     *    the rectangular boundary of the rendered text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the bottom of
     *    the rectangular boundary of the rendered text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the bottom of
     *    the rectangular boundary of the rendered text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the bottom of
     *    the rectangular boundary of the rendered text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly actualBoundingBoxDescent: number;
    /**
     * Double, parallel to the baseline, distance from the alignment point determined by the textAlign property to
     *    the left of the text rectangle boundary.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, parallel to the baseline, distance from the alignment point determined by the textAlign property to
     *    the left of the text rectangle boundary.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, parallel to the baseline, distance from the alignment point determined by the textAlign property to
     *    the left of the text rectangle boundary.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, parallel to the baseline, distance from the alignment point determined by the textAlign property to
     *    the left of the text rectangle boundary.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly actualBoundingBoxLeft: number;
    /**
     * Double, parallel to the baseline, distance from the alignment point determined by the textAlign property to
     *    the right of the text rectangle boundary.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, parallel to the baseline, distance from the alignment point determined by the textAlign property to
     *    the right of the text rectangle boundary.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, parallel to the baseline, distance from the alignment point determined by the textAlign property to
     *    the right of the text rectangle boundary.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, parallel to the baseline, distance from the alignment point determined by the textAlign property to
     *    the right of the text rectangle boundary.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly actualBoundingBoxRight: number;
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the alphabetic baseline of
     *    the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the alphabetic baseline of
     *    the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the alphabetic baseline of
     *    the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the alphabetic baseline of
     *    the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly alphabeticBaseline: number;
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the top of the
     *    em square in the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the top of the
     *    em square in the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the top of the
     *    em square in the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, the distance from the horizontal line indicated by the textBaseline property to the top of the
     *    em square in the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly emHeightAscent: number;
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the bottom of the
     *    em box in the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the bottom of the
     *    em box in the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the bottom of the
     *    em box in the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the bottom of the
     *    em box in the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly emHeightDescent: number;
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the top of the
     *    highest rectangle boundary of all fonts rendering text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the top of the
     *    highest rectangle boundary of all fonts rendering text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the top of the
     *    highest rectangle boundary of all fonts rendering text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the top of the
     *    highest rectangle boundary of all fonts rendering text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly fontBoundingBoxAscent: number;
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the bottom of the
     *   rectangular boundary of all fonts rendering text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the bottom of the
     *   rectangular boundary of all fonts rendering text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the bottom of the
     *   rectangular boundary of all fonts rendering text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to the bottom of the
     *   rectangular boundary of all fonts rendering text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly fontBoundingBoxDescent: number;
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to
     *    the hanging baseline of the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to
     *    the hanging baseline of the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to
     *    the hanging baseline of the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to
     *    the hanging baseline of the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly hangingBaseline: number;
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to
     *    the ideographic baseline of the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to
     *    the ideographic baseline of the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to
     *    the ideographic baseline of the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Double, distance from the horizontal line indicated by the textBaseline property to
     *    the ideographic baseline of the wireframe.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly ideographicBaseline: number;
    /**
     * Indicates the width of a character string. The value is of the double type.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Indicates the width of a character string. The value is of the double type.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Indicates the width of a character string. The value is of the double type.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Indicates the width of a character string. The value is of the double type.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly width: number;
    /**
     * Indicates the height of a character string. The value is of the double type.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Indicates the height of a character string. The value is of the double type.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Indicates the height of a character string. The value is of the double type.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Indicates the height of a character string. The value is of the double type.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly height: number;
}
/**
 * Bitmap image object that can be drawn onto the current Canvas
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Bitmap image object that can be drawn onto the current Canvas
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Bitmap image object that can be drawn onto the current Canvas
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Bitmap image object that can be drawn onto the current Canvas
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class ImageBitmap {
    /**
     * Indicates the height of the CSS pixel unit of ImageData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Indicates the height of the CSS pixel unit of ImageData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Indicates the height of the CSS pixel unit of ImageData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Indicates the height of the CSS pixel unit of ImageData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly height: number;
    /**
     * Indicates the width of the CSS pixel unit of ImageData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Indicates the width of the CSS pixel unit of ImageData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Indicates the width of the CSS pixel unit of ImageData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Indicates the width of the CSS pixel unit of ImageData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly width: number;
    /**
     * Releases all graphics resources associated with an ImageBitmap.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Releases all graphics resources associated with an ImageBitmap.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Releases all graphics resources associated with an ImageBitmap.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Releases all graphics resources associated with an ImageBitmap.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    close(): void;
    /**
     * Create an ImageBitmap object based on the transferred image path.
     *
     * @param { string } src - Path of the image object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Create an ImageBitmap object based on the transferred image path.
     *
     * @param { string } src - Path of the image object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Create an ImageBitmap object based on the transferred image path.
     *
     * @param { string } src - Path of the image object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Create an ImageBitmap object based on the transferred image path.
     *
     * @param { string } src - Path of the image object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor(src: string);
    /**
     * Create an ImageBitmap object based on the transferred image path.
     *
     * @param { string } src - Path of the image object.
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    constructor(src: string, unit: LengthMetricsUnit);
    /**
     * Transfer a PixelMap object to construct an ImageBitmap object.
     *
     * @param { PixelMap } data - PixelMap object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Transfer a PixelMap object to construct an ImageBitmap object.
     *
     * @param { PixelMap } data - PixelMap object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Transfer a PixelMap object to construct an ImageBitmap object.
     *
     * @param { PixelMap } data - PixelMap object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor(data: PixelMap);
    /**
     * Transfer a PixelMap object to construct an ImageBitmap object.
     *
     * @param { PixelMap } data - PixelMap object
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor(data: PixelMap, unit: LengthMetricsUnit);
}
/**
 * Image data object
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Image data object
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Image data object
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Image data object
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class ImageData {
    /**
     * Array containing image pixel data
     *
     * @type { Uint8ClampedArray }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Array containing image pixel data
     *
     * @type { Uint8ClampedArray }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Array containing image pixel data
     *
     * @type { Uint8ClampedArray }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Array containing image pixel data
     *
     * @type { Uint8ClampedArray }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly data: Uint8ClampedArray;
    /**
     * Width of the image.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Width of the image.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Width of the image.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Width of the image.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly height: number;
    /**
     * Height of the image.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Height of the image.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Height of the image.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Height of the image.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly width: number;
    /**
     * Create an ImageData object based on the input parameters.
     *
     * @param { number } width - Width of the image.
     * @param { number } height - Height of the image.
     * @param { Uint8ClampedArray } data - Data of the image. If this parameter is not specified, the default value is a black rectangular image.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Create an ImageData object based on the input parameters.
     *
     * @param { number } width - Width of the image.
     * @param { number } height - Height of the image.
     * @param { Uint8ClampedArray } data - Data of the image. If this parameter is not specified, the default value is a black rectangular image.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Create an ImageData object based on the input parameters.
     *
     * @param { number } width - Width of the image.
     * @param { number } height - Height of the image.
     * @param { Uint8ClampedArray } data - Data of the image. If this parameter is not specified, the default value is a black rectangular image.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Create an ImageData object based on the input parameters.
     *
     * @param { number } width - Width of the image.
     * @param { number } height - Height of the image.
     * @param { Uint8ClampedArray } data - Data of the image. If this parameter is not specified, the default value is a black rectangular image.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor(width: number, height: number, data?: Uint8ClampedArray);
    /**
     * Create an ImageData object based on the input parameters.
     *
     * @param { number } width - Width of the image.
     * @param { number } height - Height of the image.
     * @param { Uint8ClampedArray } data - Data of the image. If this parameter is not specified, the default value is a black rectangular image.
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    constructor(width: number, height: number, data?: Uint8ClampedArray, unit?: LengthMetricsUnit);
}
/**
 * This object allows you to set properties when creating a rendering context
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * This object allows you to set properties when creating a rendering context
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * This object allows you to set properties when creating a rendering context
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * This object allows you to set properties when creating a rendering context
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class RenderingContextSettings {
    /**
     * Indicates whether anti-aliasing is enabled for canvas. The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Indicates whether anti-aliasing is enabled for canvas. The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Indicates whether anti-aliasing is enabled for canvas. The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Indicates whether anti-aliasing is enabled for canvas. The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    antialias?: boolean;
    /**
     * Create an RenderingContextSettings object based on the antialias and alpha.
     *
     * @param { boolean } antialias - Indicates whether anti-aliasing is enabled for canvas
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Create an RenderingContextSettings object based on the antialias and alpha.
     *
     * @param { boolean } antialias - Indicates whether anti-aliasing is enabled for canvas
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Create an RenderingContextSettings object based on the antialias and alpha.
     *
     * @param { boolean } antialias - Indicates whether anti-aliasing is enabled for canvas
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Create an RenderingContextSettings object based on the antialias and alpha.
     *
     * @param { boolean } antialias - Indicates whether anti-aliasing is enabled for canvas
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor(antialias?: boolean);
}
/**
 * Canvas renderer for drawing shapes, text, images and other objects
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Canvas renderer for drawing shapes, text, images and other objects
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Canvas renderer for drawing shapes, text, images and other objects
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Canvas renderer for drawing shapes, text, images and other objects
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CanvasRenderer extends CanvasPath {
    /**
     * Transparency. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
     *    If the value is out of range, the assignment is invalid.
     *
     * @type { number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Transparency. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
     *    If the value is out of range, the assignment is invalid.
     *
     * @type { number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Transparency. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
     *    If the value is out of range, the assignment is invalid.
     *
     * @type { number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Transparency. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
     *    If the value is out of range, the assignment is invalid.
     *
     * @type { number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    globalAlpha: number;
    /**
     * Type of composition operation applied when drawing a new shape. The following types are supported:
     * source-over: (Default) Draws a new drawing on top of an existing canvas context.
     * source-in: The new drawing is drawn only where the new drawing overlaps the target canvas.
     *    Everything else is transparent.
     * source-out: Draws a new drawing where it does not overlap with the existing canvas content.
     * source-atop: The new drawing is drawn only where it overlaps the content of the existing canvas.
     * destination-over: Draws a new graphic behind the existing canvas content.
     * destination-in: Existing canvas content remains where the new drawing overlaps the existing canvas content.
     *    Everything else is transparent.
     * destination-out: Existing content remains where the new drawing does not overlap.
     * destination-atop: The existing canvas retains only the part that overlaps with the new drawing,
     *    which is drawn behind the canvas content.
     * lighter: The color of two overlapping shapes is determined by adding the color values.
     * copy: Only new graphics are displayed.
     * xor: In the image, those overlaps and other places outside of the normal drawing are transparent.
     *
     * @type { string }
     * @default source-over
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Type of composition operation applied when drawing a new shape. The following types are supported:
     * source-over: (Default) Draws a new drawing on top of an existing canvas context.
     * source-in: The new drawing is drawn only where the new drawing overlaps the target canvas.
     *    Everything else is transparent.
     * source-out: Draws a new drawing where it does not overlap with the existing canvas content.
     * source-atop: The new drawing is drawn only where it overlaps the content of the existing canvas.
     * destination-over: Draws a new graphic behind the existing canvas content.
     * destination-in: Existing canvas content remains where the new drawing overlaps the existing canvas content.
     *    Everything else is transparent.
     * destination-out: Existing content remains where the new drawing does not overlap.
     * destination-atop: The existing canvas retains only the part that overlaps with the new drawing,
     *    which is drawn behind the canvas content.
     * lighter: The color of two overlapping shapes is determined by adding the color values.
     * copy: Only new graphics are displayed.
     * xor: In the image, those overlaps and other places outside of the normal drawing are transparent.
     *
     * @type { string }
     * @default source-over
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Type of composition operation applied when drawing a new shape. The following types are supported:
     * source-over: (Default) Draws a new drawing on top of an existing canvas context.
     * source-in: The new drawing is drawn only where the new drawing overlaps the target canvas.
     *    Everything else is transparent.
     * source-out: Draws a new drawing where it does not overlap with the existing canvas content.
     * source-atop: The new drawing is drawn only where it overlaps the content of the existing canvas.
     * destination-over: Draws a new graphic behind the existing canvas content.
     * destination-in: Existing canvas content remains where the new drawing overlaps the existing canvas content.
     *    Everything else is transparent.
     * destination-out: Existing content remains where the new drawing does not overlap.
     * destination-atop: The existing canvas retains only the part that overlaps with the new drawing,
     *    which is drawn behind the canvas content.
     * lighter: The color of two overlapping shapes is determined by adding the color values.
     * copy: Only new graphics are displayed.
     * xor: In the image, those overlaps and other places outside of the normal drawing are transparent.
     *
     * @type { string }
     * @default source-over
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Type of composition operation applied when drawing a new shape. The following types are supported:
     * source-over: (Default) Draws a new drawing on top of an existing canvas context.
     * source-in: The new drawing is drawn only where the new drawing overlaps the target canvas.
     *    Everything else is transparent.
     * source-out: Draws a new drawing where it does not overlap with the existing canvas content.
     * source-atop: The new drawing is drawn only where it overlaps the content of the existing canvas.
     * destination-over: Draws a new graphic behind the existing canvas content.
     * destination-in: Existing canvas content remains where the new drawing overlaps the existing canvas content.
     *    Everything else is transparent.
     * destination-out: Existing content remains where the new drawing does not overlap.
     * destination-atop: The existing canvas retains only the part that overlaps with the new drawing,
     *    which is drawn behind the canvas content.
     * lighter: The color of two overlapping shapes is determined by adding the color values.
     * copy: Only new graphics are displayed.
     * xor: In the image, those overlaps and other places outside of the normal drawing are transparent.
     *
     * @type { string }
     * @default source-over
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    globalCompositeOperation: string;
    /**
     * Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number): void;
    /**
     * Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
     * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
     * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
     * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
     * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number, dw: number, dh: number): void;
    /**
     *Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } sx - x coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
     * @param { number } sy - y coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
     * @param { number } sw - Width of the rectangle (cropping) selection box of the image.
     * @param { number } sh - Height of the rectangle (cropping) selection box of the image.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
     * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     *Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } sx - x coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
     * @param { number } sy - y coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
     * @param { number } sw - Width of the rectangle (cropping) selection box of the image.
     * @param { number } sh - Height of the rectangle (cropping) selection box of the image.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
     * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     *Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } sx - x coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
     * @param { number } sy - y coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
     * @param { number } sw - Width of the rectangle (cropping) selection box of the image.
     * @param { number } sh - Height of the rectangle (cropping) selection box of the image.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
     * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     *Draw an image on a canvas
     *
     * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
     * @param { number } sx - x coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
     * @param { number } sy - y coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
     * @param { number } sw - Width of the rectangle (cropping) selection box of the image.
     * @param { number } sh - Height of the rectangle (cropping) selection box of the image.
     * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
     * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
     * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    drawImage(image: ImageBitmap | PixelMap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
    /**
     * Clear the sub-path list and start a new path.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Clear the sub-path list and start a new path.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Clear the sub-path list and start a new path.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Clear the sub-path list and start a new path.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    beginPath(): void;
    /**
     * Sets the currently created path as the current clipping path
     *
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the currently created path as the current clipping path
     *
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the currently created path as the current clipping path
     *
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the currently created path as the current clipping path
     *
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    clip(fillRule?: CanvasFillRule): void;
    /**
     * Tailoring according to the specified path
     *
     * @param { Path2D } path - Path to be cut.
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Tailoring according to the specified path
     *
     * @param { Path2D } path - Path to be cut.
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Tailoring according to the specified path
     *
     * @param { Path2D } path - Path to be cut.
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Tailoring according to the specified path
     *
     * @param { Path2D } path - Path to be cut.
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    /**
     * Fills existing paths according to the current fill style.
     *
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Fills existing paths according to the current fill style.
     *
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Fills existing paths according to the current fill style.
     *
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Fills existing paths according to the current fill style.
     *
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fill(fillRule?: CanvasFillRule): void;
    /**
     * Fills the specified path according to the current fill style
     *
     * @param { Path2D } path - Path to be filled.
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Fills the specified path according to the current fill style
     *
     * @param { Path2D } path - Path to be filled.
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Fills the specified path according to the current fill style
     *
     * @param { Path2D } path - Path to be filled.
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Fills the specified path according to the current fill style
     *
     * @param { Path2D } path - Path to be filled.
     * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    /**
     * Draws an existing path according to the current stroke style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draws an existing path according to the current stroke style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draws an existing path according to the current stroke style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draws an existing path according to the current stroke style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    stroke(): void;
    /**
     * Draws the specified path according to the current stroke style
     *
     * @param { Path2D } path - Specified stroke path object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draws the specified path according to the current stroke style
     *
     * @param { Path2D } path - Specified stroke path object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draws the specified path according to the current stroke style
     *
     * @param { Path2D } path - Specified stroke path object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draws the specified path according to the current stroke style
     *
     * @param { Path2D } path - Specified stroke path object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    stroke(path: Path2D): void;
    /**
     * Attributes that describe the fill color and style. The options are as follows:
     * color: Color String
     * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
     * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
     *
     * @type { string | CanvasGradient | CanvasPattern }
     * @default #000000 (black)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Attributes that describe the fill color and style. The options are as follows:
     * color: Color String
     * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
     * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
     *
     * @type { string | CanvasGradient | CanvasPattern }
     * @default #000000 (black)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Attributes that describe the fill color and style. The options are as follows:
     *
     * @type { string | number | CanvasGradient | CanvasPattern }
     * string: Color String.
     * number: Indicates the color with number.
     * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
     * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
     * @default #000000 (black)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Attributes that describe the fill color and style. The options are as follows:
     *
     * @type { string | number | CanvasGradient | CanvasPattern }
     * string: Color String.
     * number: Indicates the color with number.
     * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
     * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
     * @default #000000 (black)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fillStyle: string | number | CanvasGradient | CanvasPattern;
    /**
     * Attributes of the stroke color and style. The options are as follows:
     * color: Color String
     * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
     * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
     *
     * @type { string | CanvasGradient | CanvasPattern }
     * @default #000000 (black)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Attributes of the stroke color and style. The options are as follows:
     * color: Color String
     * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
     * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
     *
     * @type { string | CanvasGradient | CanvasPattern }
     * @default #000000 (black)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Attributes of the stroke color and style. The options are as follows:
     *
     * @type { string | number | CanvasGradient | CanvasPattern }
     * string: Color String.
     * number: Indicates the color with number.
     * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
     * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
     * @default #000000 (black)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Attributes of the stroke color and style. The options are as follows:
     *
     * @type { string | number | CanvasGradient | CanvasPattern }
     * string: Color String.
     * number: Indicates the color with number.
     * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
     * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
     * @default #000000 (black)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeStyle: string | number | CanvasGradient | CanvasPattern;
    /**
     * Creates a linear gradient object that is specified along the parameter coordinates
     *
     * @param { number } x0 - The x-axis coordinate of the start point.
     * @param { number } y0 - The y-axis coordinate of the start point.
     * @param { number } x1 - x-axis coordinate of the end point.
     * @param { number } y1 - y-axis coordinate of the end point.
     * @returns { CanvasGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Creates a linear gradient object that is specified along the parameter coordinates
     *
     * @param { number } x0 - The x-axis coordinate of the start point.
     * @param { number } y0 - The y-axis coordinate of the start point.
     * @param { number } x1 - x-axis coordinate of the end point.
     * @param { number } y1 - y-axis coordinate of the end point.
     * @returns { CanvasGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Creates a linear gradient object that is specified along the parameter coordinates
     *
     * @param { number } x0 - The x-axis coordinate of the start point.
     * @param { number } y0 - The y-axis coordinate of the start point.
     * @param { number } x1 - x-axis coordinate of the end point.
     * @param { number } y1 - y-axis coordinate of the end point.
     * @returns { CanvasGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Creates a linear gradient object that is specified along the parameter coordinates
     *
     * @param { number } x0 - The x-axis coordinate of the start point.
     * @param { number } y0 - The y-axis coordinate of the start point.
     * @param { number } x1 - x-axis coordinate of the end point.
     * @param { number } y1 - y-axis coordinate of the end point.
     * @returns { CanvasGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    /**
     * Creates a template object using the specified image
     *
     * @param { ImageBitmap } image - Objects as duplicate image sources
     * @param { string | null } repetition - Specifies how to repeat images. The following four modes are supported:
     * "repeat": Repeated images in both X and Y directions
     * "repeat-x": Repeated images in the X-axis direction but not in the Y-axis direction
     * "repeat-y": The image is repeated in the Y axis direction, and the image is not repeated in the X axis direction.
     * "no-repeat": Non-repeating images in both X and Y directions
     * @returns { CanvasPattern | null }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Creates a template object using the specified image
     *
     * @param { ImageBitmap } image - Objects as duplicate image sources
     * @param { string | null } repetition - Specifies how to repeat images. The following four modes are supported:
     * "repeat": Repeated images in both X and Y directions
     * "repeat-x": Repeated images in the X-axis direction but not in the Y-axis direction
     * "repeat-y": The image is repeated in the Y axis direction, and the image is not repeated in the X axis direction.
     * "no-repeat": Non-repeating images in both X and Y directions
     * @returns { CanvasPattern | null }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Creates a template object using the specified image
     *
     * @param { ImageBitmap } image - Objects as duplicate image sources
     * @param { string | null } repetition - Specifies how to repeat images. The following four modes are supported:
     * "repeat": Repeated images in both X and Y directions
     * "repeat-x": Repeated images in the X-axis direction but not in the Y-axis direction
     * "repeat-y": The image is repeated in the Y axis direction, and the image is not repeated in the X axis direction.
     * "no-repeat": Non-repeating images in both X and Y directions
     * "clamp": Replicate the edge color if the shader draws outside of its original bounds.
     * "mirror": Repeat the shader's image horizontally and vertically, alternating mirror images so that adjacent images always seam.
     * @returns { CanvasPattern | null }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Creates a template object using the specified image
     *
     * @param { ImageBitmap } image - Objects as duplicate image sources
     * @param { string | null } repetition - Specifies how to repeat images. The following four modes are supported:
     * "repeat": Repeated images in both X and Y directions
     * "repeat-x": Repeated images in the X-axis direction but not in the Y-axis direction
     * "repeat-y": The image is repeated in the Y axis direction, and the image is not repeated in the X axis direction.
     * "no-repeat": Non-repeating images in both X and Y directions
     * "clamp": Replicate the edge color if the shader draws outside of its original bounds.
     * "mirror": Repeat the shader's image horizontally and vertically, alternating mirror images so that adjacent images always seam.
     * @returns { CanvasPattern | null }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    createPattern(image: ImageBitmap, repetition: string | null): CanvasPattern | null;
    /**
     * Creates a radioactive gradient object based on parameters that determine the coordinates of two circles
     *
     * @param { number } x0 - The x-axis coordinate of the start circle.
     * @param { number } y0 - The y-axis coordinate of the start circle.
     * @param { number } r0 - Radius of the starting circle.
     * @param { number } x1 - The x-axis coordinate of the end circle.
     * @param { number } y1 - The y-axis coordinate of the end circle.
     * @param { number } r1 - Radius of the end circle.
     * @returns { CanvasGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Creates a radioactive gradient object based on parameters that determine the coordinates of two circles
     *
     * @param { number } x0 - The x-axis coordinate of the start circle.
     * @param { number } y0 - The y-axis coordinate of the start circle.
     * @param { number } r0 - Radius of the starting circle.
     * @param { number } x1 - The x-axis coordinate of the end circle.
     * @param { number } y1 - The y-axis coordinate of the end circle.
     * @param { number } r1 - Radius of the end circle.
     * @returns { CanvasGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Creates a radioactive gradient object based on parameters that determine the coordinates of two circles
     *
     * @param { number } x0 - The x-axis coordinate of the start circle.
     * @param { number } y0 - The y-axis coordinate of the start circle.
     * @param { number } r0 - Radius of the starting circle.
     * @param { number } x1 - The x-axis coordinate of the end circle.
     * @param { number } y1 - The y-axis coordinate of the end circle.
     * @param { number } r1 - Radius of the end circle.
     * @returns { CanvasGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Creates a radioactive gradient object based on parameters that determine the coordinates of two circles
     *
     * @param { number } x0 - The x-axis coordinate of the start circle.
     * @param { number } y0 - The y-axis coordinate of the start circle.
     * @param { number } r0 - Radius of the starting circle.
     * @param { number } x1 - The x-axis coordinate of the end circle.
     * @param { number } y1 - The y-axis coordinate of the end circle.
     * @param { number } r1 - Radius of the end circle.
     * @returns { CanvasGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    /**
     * Creates a gradient around a point with given coordinates.
     *
     * @param { number } startAngle - The angle at which to begin the gradient, in radians.
     *                   Angle measurements start horizontally the right of the center and move around clockwise.
     * @param { number } x - The x-axis coordinate of the center of the gradient.
     * @param { number } y - The y-axis coordinate of the center of the gradient.
     * @returns { CanvasGradient } A CanvasGradient object that draws a conic gradient around the given coordinates.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a gradient around a point with given coordinates.
     *
     * @param { number } startAngle - The angle at which to begin the gradient, in radians.
     *                   Angle measurements start horizontally the right of the center and move around clockwise.
     * @param { number } x - The x-axis coordinate of the center of the gradient.
     * @param { number } y - The y-axis coordinate of the center of the gradient.
     * @returns { CanvasGradient } A CanvasGradient object that draws a conic gradient around the given coordinates.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
    /**
     * Provides filter effects such as blur and grayscale. You can set the following filter effects:
     * blur(<length>): Adds a Gaussian blur effect to the drawing
     * brightness(<percentage>): Provides a linear multiplication for the drawing and adjusts the brightness level.
     * contrast(<percentage>): Adjusts the contrast of the image. When the value is 0%, the image is completely black.
     *    When the value is 100%, there is no change in the image.
     * grayscale(<percentage>): Converts the image to a gray image. When the value is 100%, the image is completely gray.
     *    When the value is 0%, there is no change in the image.
     * hue-rotate(<degree>): Perform color rotation on an image. When the value is 0 degrees, there is no change in the image.
     * invert(<percentage>): Inverted image (representing the effect of a photographic negative). When the value is 100%,
     *    the image is completely inverted. When the value is 0%, there is no change in the image.
     * opacity(<percentage>): Transparency of the image. At 0%, the image is completely transparent.
     *    When the value is 100%, there is no change in the image.
     * saturate(<percentage>): Perform saturation processing on the image. At 0%, the image is completely un-saturated.
     *    When the value is 100%, there is no change in the image.
     * sepia(<percentage>): The image is sepia (nostalgic style). At 100%, the image turns completely sepia.
     *    When the value is 0%, there is no change in the image.
     * none: Turn off filter effects
     *
     * @type { string }
     * @default none
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Provides filter effects such as blur and grayscale. You can set the following filter effects:
     * blur(<length>): Adds a Gaussian blur effect to the drawing
     * brightness(<percentage>): Provides a linear multiplication for the drawing and adjusts the brightness level.
     * contrast(<percentage>): Adjusts the contrast of the image. When the value is 0%, the image is completely black.
     *    When the value is 100%, there is no change in the image.
     * grayscale(<percentage>): Converts the image to a gray image. When the value is 100%, the image is completely gray.
     *    When the value is 0%, there is no change in the image.
     * hue-rotate(<degree>): Perform color rotation on an image. When the value is 0 degrees, there is no change in the image.
     * invert(<percentage>): Inverted image (representing the effect of a photographic negative). When the value is 100%,
     *    the image is completely inverted. When the value is 0%, there is no change in the image.
     * opacity(<percentage>): Transparency of the image. At 0%, the image is completely transparent.
     *    When the value is 100%, there is no change in the image.
     * saturate(<percentage>): Perform saturation processing on the image. At 0%, the image is completely un-saturated.
     *    When the value is 100%, there is no change in the image.
     * sepia(<percentage>): The image is sepia (nostalgic style). At 100%, the image turns completely sepia.
     *    When the value is 0%, there is no change in the image.
     * none: Turn off filter effects
     *
     * @type { string }
     * @default none
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Provides filter effects such as blur and grayscale. You can set the following filter effects:
     * blur(<length>): Adds a Gaussian blur effect to the drawing
     * brightness(<percentage>): Provides a linear multiplication for the drawing and adjusts the brightness level.
     * contrast(<percentage>): Adjusts the contrast of the image. When the value is 0%, the image is completely black.
     *    When the value is 100%, there is no change in the image.
     * grayscale(<percentage>): Converts the image to a gray image. When the value is 100%, the image is completely gray.
     *    When the value is 0%, there is no change in the image.
     * hue-rotate(<degree>): Perform color rotation on an image. When the value is 0 degrees, there is no change in the image.
     * invert(<percentage>): Inverted image (representing the effect of a photographic negative). When the value is 100%,
     *    the image is completely inverted. When the value is 0%, there is no change in the image.
     * opacity(<percentage>): Transparency of the image. At 0%, the image is completely transparent.
     *    When the value is 100%, there is no change in the image.
     * saturate(<percentage>): Perform saturation processing on the image. At 0%, the image is completely un-saturated.
     *    When the value is 100%, there is no change in the image.
     * sepia(<percentage>): The image is sepia (nostalgic style). At 100%, the image turns completely sepia.
     *    When the value is 0%, there is no change in the image.
     * none: Turn off filter effects
     *
     * @type { string }
     * @default none
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Provides filter effects such as blur and grayscale. You can set the following filter effects:
     * blur(<length>): Adds a Gaussian blur effect to the drawing
     * brightness(<percentage>): Provides a linear multiplication for the drawing and adjusts the brightness level.
     * contrast(<percentage>): Adjusts the contrast of the image. When the value is 0%, the image is completely black.
     *    When the value is 100%, there is no change in the image.
     * grayscale(<percentage>): Converts the image to a gray image. When the value is 100%, the image is completely gray.
     *    When the value is 0%, there is no change in the image.
     * hue-rotate(<degree>): Perform color rotation on an image. When the value is 0 degrees, there is no change in the image.
     * invert(<percentage>): Inverted image (representing the effect of a photographic negative). When the value is 100%,
     *    the image is completely inverted. When the value is 0%, there is no change in the image.
     * opacity(<percentage>): Transparency of the image. At 0%, the image is completely transparent.
     *    When the value is 100%, there is no change in the image.
     * saturate(<percentage>): Perform saturation processing on the image. At 0%, the image is completely un-saturated.
     *    When the value is 100%, there is no change in the image.
     * sepia(<percentage>): The image is sepia (nostalgic style). At 100%, the image turns completely sepia.
     *    When the value is 0%, there is no change in the image.
     * none: Turn off filter effects
     *
     * @type { string }
     * @default none
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    filter: string;
    /**
     * Creates a new, empty ImageData object of the specified size
     *
     * @param { number } sw - Width of the ImageData object.
     * @param { number } sh - Height of the ImageData object.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Creates a new, empty ImageData object of the specified size
     *
     * @param { number } sw - Width of the ImageData object.
     * @param { number } sh - Height of the ImageData object.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Creates a new, empty ImageData object of the specified size
     *
     * @param { number } sw - Width of the ImageData object.
     * @param { number } sh - Height of the ImageData object.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Creates a new, empty ImageData object of the specified size
     *
     * @param { number } sw - Width of the ImageData object.
     * @param { number } sh - Height of the ImageData object.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    createImageData(sw: number, sh: number): ImageData;
    /**
     * From an existing ImageData object, copy an object with the same width and height as the image.
     *    The image content is not copied.
     *
     * @param { ImageData } imagedata - ImageData object to be copied.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * From an existing ImageData object, copy an object with the same width and height as the image.
     *    The image content is not copied.
     *
     * @param { ImageData } imagedata - ImageData object to be copied.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * From an existing ImageData object, copy an object with the same width and height as the image.
     *    The image content is not copied.
     *
     * @param { ImageData } imagedata - ImageData object to be copied.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * From an existing ImageData object, copy an object with the same width and height as the image.
     *    The image content is not copied.
     *
     * @param { ImageData } imagedata - ImageData object to be copied.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    createImageData(imagedata: ImageData): ImageData;
    /**
     * Obtains the pixel data of a specified area on the current canvas.
     *
     * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the image data to be extracted.
     * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the image data to be extracted.
     * @param { number } sw - The width of the rectangular area of the image data to be extracted.
     * @param { number } sh - The height of the rectangular area of the image data to be extracted.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Obtains the pixel data of a specified area on the current canvas.
     *
     * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the image data to be extracted.
     * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the image data to be extracted.
     * @param { number } sw - The width of the rectangular area of the image data to be extracted.
     * @param { number } sh - The height of the rectangular area of the image data to be extracted.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Obtains the pixel data of a specified area on the current canvas.
     *
     * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the image data to be extracted.
     * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the image data to be extracted.
     * @param { number } sw - The width of the rectangular area of the image data to be extracted.
     * @param { number } sh - The height of the rectangular area of the image data to be extracted.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Obtains the pixel data of a specified area on the current canvas.
     *
     * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the image data to be extracted.
     * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the image data to be extracted.
     * @param { number } sw - The width of the rectangular area of the image data to be extracted.
     * @param { number } sh - The height of the rectangular area of the image data to be extracted.
     * @returns { ImageData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    /**
     * Obtains the PixelMap of a specified area on the current canvas.
     *
     * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
     * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
     * @param { number } sw - The width of the rectangular area of the PixelMap to be extracted.
     * @param { number } sh - The height of the rectangular area of the PixelMap to be extracted.
     * @returns { PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Obtains the PixelMap of a specified area on the current canvas.
     *
     * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
     * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
     * @param { number } sw - The width of the rectangular area of the PixelMap to be extracted.
     * @param { number } sh - The height of the rectangular area of the PixelMap to be extracted.
     * @returns { PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the PixelMap of a specified area on the current canvas.
     *
     * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
     * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
     * @param { number } sw - The width of the rectangular area of the PixelMap to be extracted.
     * @param { number } sh - The height of the rectangular area of the PixelMap to be extracted.
     * @returns { PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getPixelMap(sx: number, sy: number, sw: number, sh: number): PixelMap;
    /**
     * Draws the specified ImageData object onto the canvas
     *
     * @param { ImageData } imagedata - ImageData object to be drawn.
     * @param { number } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
     * @param { number } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draws the specified ImageData object onto the canvas
     *
     * @param { ImageData } imagedata - ImageData object to be drawn.
     * @param { number } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
     * @param { number } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draws the specified ImageData object onto the canvas
     *
     * @param { ImageData } imagedata - ImageData object to be drawn.
     * @param { number | string } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
     * @param { number | string } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draws the specified ImageData object onto the canvas
     *
     * @param { ImageData } imagedata - ImageData object to be drawn.
     * @param { number | string } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
     * @param { number | string } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    putImageData(imagedata: ImageData, dx: number | string, dy: number | string): void;
    /**
     * Draws the specified ImageData object onto the canvas
     *
     * @param { ImageData } imagedata - ImageData object to be drawn.
     * @param { number } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
     * @param { number } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
     * @param { number } dirtyX - Position of the upper left corner of the rectangular area in the source image data.
     *    The default is the upper left corner (x coordinate) of the entire image data.
     * @param { number } dirtyY - Position of the upper left corner of the rectangular area in the source image data.
     *    The default is the upper left corner (y coordinate) of the entire image data.
     * @param { number } dirtyWidth - Width of the rectangular area in the source image data.
     *    The default is the width of the image data.
     * @param { number } dirtyHeight - Height of the rectangular area in the source image data.
     *    The default is the height of the image data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Draws the specified ImageData object onto the canvas
     *
     * @param { ImageData } imagedata - ImageData object to be drawn.
     * @param { number } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
     * @param { number } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
     * @param { number } dirtyX - Position of the upper left corner of the rectangular area in the source image data.
     *    The default is the upper left corner (x coordinate) of the entire image data.
     * @param { number } dirtyY - Position of the upper left corner of the rectangular area in the source image data.
     *    The default is the upper left corner (y coordinate) of the entire image data.
     * @param { number } dirtyWidth - Width of the rectangular area in the source image data.
     *    The default is the width of the image data.
     * @param { number } dirtyHeight - Height of the rectangular area in the source image data.
     *    The default is the height of the image data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Draws the specified ImageData object onto the canvas
     *
     * @param { ImageData } imagedata - ImageData object to be drawn.
     * @param { number | string } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
     * @param { number | string } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
     * @param { number | string } dirtyX - Position of the upper left corner of the rectangular area in the source image data.
     *    The default is the upper left corner (x coordinate) of the entire image data.
     * @param { number | string } dirtyY - Position of the upper left corner of the rectangular area in the source image data.
     *    The default is the upper left corner (y coordinate) of the entire image data.
     * @param { number | string } dirtyWidth - Width of the rectangular area in the source image data.
     *    The default is the width of the image data.
     * @param { number | string } dirtyHeight - Height of the rectangular area in the source image data.
     *    The default is the height of the image data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Draws the specified ImageData object onto the canvas
     *
     * @param { ImageData } imagedata - ImageData object to be drawn.
     * @param { number | string } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
     * @param { number | string } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
     * @param { number | string } dirtyX - Position of the upper left corner of the rectangular area in the source image data.
     *    The default is the upper left corner (x coordinate) of the entire image data.
     * @param { number | string } dirtyY - Position of the upper left corner of the rectangular area in the source image data.
     *    The default is the upper left corner (y coordinate) of the entire image data.
     * @param { number | string } dirtyWidth - Width of the rectangular area in the source image data.
     *    The default is the width of the image data.
     * @param { number | string } dirtyHeight - Height of the rectangular area in the source image data.
     *    The default is the height of the image data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    putImageData(imagedata: ImageData, dx: number | string, dy: number | string, dirtyX: number | string, dirtyY: number | string, dirtyWidth: number | string, dirtyHeight: number | string): void;
    /**
     * Specifies whether to smooth the image. The value true indicates that the image is smooth.
     *    The value false indicates that the image is not smooth.
     *
     * @type { boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Specifies whether to smooth the image. The value true indicates that the image is smooth.
     *    The value false indicates that the image is not smooth.
     *
     * @type { boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Specifies whether to smooth the image. The value true indicates that the image is smooth.
     *    The value false indicates that the image is not smooth.
     *
     * @type { boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Specifies whether to smooth the image. The value true indicates that the image is smooth.
     *    The value false indicates that the image is not smooth.
     *
     * @type { boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    imageSmoothingEnabled: boolean;
    /**
     * Smoothness level of the current image. For details, see {@link ImageSmoothingQuality}.
     *
     * @type { ImageSmoothingQuality }
     * @default low
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Smoothness level of the current image. For details, see {@link ImageSmoothingQuality}.
     *
     * @type { ImageSmoothingQuality }
     * @default low
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Smoothness level of the current image. For details, see {@link ImageSmoothingQuality}.
     *
     * @type { ImageSmoothingQuality }
     * @default low
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Smoothness level of the current image. For details, see {@link ImageSmoothingQuality}.
     *
     * @type { ImageSmoothingQuality }
     * @default low
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    imageSmoothingQuality: ImageSmoothingQuality;
    /**
     * Line segment endpoint attribute. For details, see {@link CanvasLineCap}.
     *
     * @type { CanvasLineCap }
     * @default butt
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Line segment endpoint attribute. For details, see {@link CanvasLineCap}.
     *
     * @type { CanvasLineCap }
     * @default butt
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Line segment endpoint attribute. For details, see {@link CanvasLineCap}.
     *
     * @type { CanvasLineCap }
     * @default butt
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Line segment endpoint attribute. For details, see {@link CanvasLineCap}.
     *
     * @type { CanvasLineCap }
     * @default butt
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    lineCap: CanvasLineCap;
    /**
     * Dotted line offset attribute.
     *
     * @type { number }
     * @default 0.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Dotted line offset attribute.
     *
     * @type { number }
     * @default 0.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Dotted line offset attribute.
     *
     * @type { number }
     * @default 0.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Dotted line offset attribute.
     *
     * @type { number }
     * @default 0.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    lineDashOffset: number;
    /**
     * Line segment connection point attribute. For details, see {@link CanvasLineJoin}.
     *
     * @type { CanvasLineJoin }
     * @default miter
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Line segment connection point attribute. For details, see {@link CanvasLineJoin}.
     *
     * @type { CanvasLineJoin }
     * @default miter
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Line segment connection point attribute. For details, see {@link CanvasLineJoin}.
     *
     * @type { CanvasLineJoin }
     * @default miter
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Line segment connection point attribute. For details, see {@link CanvasLineJoin}.
     *
     * @type { CanvasLineJoin }
     * @default miter
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    lineJoin: CanvasLineJoin;
    /**
     * Line thickness attribute. The value cannot be 0 or a negative number.
     *
     * @type { number }
     * @default 1(px)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Line thickness attribute. The value cannot be 0 or a negative number.
     *
     * @type { number }
     * @default 1(px)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Line thickness attribute. The value cannot be 0 or a negative number.
     *
     * @type { number }
     * @default 1(px)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Line thickness attribute. The value cannot be 0 or a negative number.
     *
     * @type { number }
     * @default 1(px)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    lineWidth: number;
    /**
     * The value of this parameter cannot be 0 or a negative number.
     *
     * @type { number }
     * @default 10(px)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The value of this parameter cannot be 0 or a negative number.
     *
     * @type { number }
     * @default 10(px)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The value of this parameter cannot be 0 or a negative number.
     *
     * @type { number }
     * @default 10(px)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The value of this parameter cannot be 0 or a negative number.
     *
     * @type { number }
     * @default 10(px)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    miterLimit: number;
    /**
     * Gets the current segment style.
     *
     * @returns { number[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Gets the current segment style.
     *
     * @returns { number[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Gets the current segment style.
     *
     * @returns { number[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Gets the current segment style.
     *
     * @returns { number[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    getLineDash(): number[];
    /**
     * Sets the dashed line mode for line drawing.
     *
     * @param { number[] } segments - A set of numbers that describe the length of alternating drawn lines segments and
     *    spacing (coordinate space units).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the dashed line mode for line drawing.
     *
     * @param { number[] } segments - A set of numbers that describe the length of alternating drawn lines segments and
     *    spacing (coordinate space units).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the dashed line mode for line drawing.
     *
     * @param { number[] } segments - A set of numbers that describe the length of alternating drawn lines segments and
     *    spacing (coordinate space units).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the dashed line mode for line drawing.
     *
     * @param { number[] } segments - A set of numbers that describe the length of alternating drawn lines segments and
     *    spacing (coordinate space units).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    setLineDash(segments: number[]): void;
    /**
     * Clears the drawing content of a rectangular area.
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Clears the drawing content of a rectangular area.
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Clears the drawing content of a rectangular area.
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Clears the drawing content of a rectangular area.
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    clearRect(x: number, y: number, w: number, h: number): void;
    /**
     * Fills a specified rectangular area
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Fills a specified rectangular area
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Fills a specified rectangular area
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Fills a specified rectangular area
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fillRect(x: number, y: number, w: number, h: number): void;
    /**
     * Stroke Specify Rectangular Area
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Stroke Specify Rectangular Area
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Stroke Specify Rectangular Area
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Stroke Specify Rectangular Area
     *
     * @param { number } x - The x-axis coordinate of the start point of the rectangle.
     * @param { number } y - The y-axis coordinate of the start point of the rectangle.
     * @param { number } w - Width of the rectangle.
     * @param { number } h - Height of the rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeRect(x: number, y: number, w: number, h: number): void;
    /**
     * Shadow blur radius. The value cannot be a negative number.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Shadow blur radius. The value cannot be a negative number.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Shadow blur radius. The value cannot be a negative number.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Shadow blur radius. The value cannot be a negative number.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    shadowBlur: number;
    /**
     * Shadow color.
     *
     * @type { string }
     * @default transparent black
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Shadow color.
     *
     * @type { string }
     * @default transparent black
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Shadow color.
     *
     * @type { string }
     * @default transparent black
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Shadow color.
     *
     * @type { string }
     * @default transparent black
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    shadowColor: string;
    /**
     * Horizontal offset distance of the shadow.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Horizontal offset distance of the shadow.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Horizontal offset distance of the shadow.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Horizontal offset distance of the shadow.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    shadowOffsetX: number;
    /**
     * Vertical offset distance of the shadow.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Vertical offset distance of the shadow.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Vertical offset distance of the shadow.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Vertical offset distance of the shadow.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    shadowOffsetY: number;
    /**
     * Top of the stack pop-up state in the drawing state stack
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Top of the stack pop-up state in the drawing state stack
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Top of the stack pop-up state in the drawing state stack
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Top of the stack pop-up state in the drawing state stack
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    restore(): void;
    /**
     * Saves the current drawing state to the drawing state stack
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Saves the current drawing state to the drawing state stack
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Saves the current drawing state to the drawing state stack
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Saves the current drawing state to the drawing state stack
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    save(): void;
    /**
     * Fills the specified text at the specified location
     *
     * @param { string } text - Text string to be drawn.
     * @param { number } x - The x-axis coordinate of the start point of the text.
     * @param { number } y - The y-axis coordinate of the start point of the text.
     * @param { number } maxWidth - Maximum width of the drawing.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Fills the specified text at the specified location
     *
     * @param { string } text - Text string to be drawn.
     * @param { number } x - The x-axis coordinate of the start point of the text.
     * @param { number } y - The y-axis coordinate of the start point of the text.
     * @param { number } maxWidth - Maximum width of the drawing.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Fills the specified text at the specified location
     *
     * @param { string } text - Text string to be drawn.
     * @param { number } x - The x-axis coordinate of the start point of the text.
     * @param { number } y - The y-axis coordinate of the start point of the text.
     * @param { number } maxWidth - Maximum width of the drawing.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Fills the specified text at the specified location
     *
     * @param { string } text - Text string to be drawn.
     * @param { number } x - The x-axis coordinate of the start point of the text.
     * @param { number } y - The y-axis coordinate of the start point of the text.
     * @param { number } maxWidth - Maximum width of the drawing.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    /**
     * Measure the size of a specified text. For details about the return value, see {@link TextMetrics}.
     *
     * @param { string } text - Text string to be measured.
     * @returns { TextMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Measure the size of a specified text. For details about the return value, see {@link TextMetrics}.
     *
     * @param { string } text - Text string to be measured.
     * @returns { TextMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Measure the size of a specified text. For details about the return value, see {@link TextMetrics}.
     *
     * @param { string } text - Text string to be measured.
     * @returns { TextMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Measure the size of a specified text. For details about the return value, see {@link TextMetrics}.
     *
     * @param { string } text - Text string to be measured.
     * @returns { TextMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    measureText(text: string): TextMetrics;
    /**
     * Stroke specified text at specified position
     *
     * @param { string } text - Text string to be stroked.
     * @param { number } x - The x-axis coordinate of the start point of the text.
     * @param { number } y - The y-axis-axis coordinate of the start point of the text.
     * @param { number } maxWidth - Maximum width of the stroke.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Stroke specified text at specified position
     *
     * @param { string } text - Text string to be stroked.
     * @param { number } x - The x-axis coordinate of the start point of the text.
     * @param { number } y - The y-axis-axis coordinate of the start point of the text.
     * @param { number } maxWidth - Maximum width of the stroke.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Stroke specified text at specified position
     *
     * @param { string } text - Text string to be stroked.
     * @param { number } x - The x-axis coordinate of the start point of the text.
     * @param { number } y - The y-axis-axis coordinate of the start point of the text.
     * @param { number } maxWidth - Maximum width of the stroke.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Stroke specified text at specified position
     *
     * @param { string } text - Text string to be stroked.
     * @param { number } x - The x-axis coordinate of the start point of the text.
     * @param { number } y - The y-axis-axis coordinate of the start point of the text.
     * @param { number } maxWidth - Maximum width of the stroke.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    /**
     * Text drawing direction. For details, see {@link CanvasDirection}.
     *
     * @type { CanvasDirection }
     * @default inherit
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Text drawing direction. For details, see {@link CanvasDirection}.
     *
     * @type { CanvasDirection }
     * @default inherit
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Text drawing direction. For details, see {@link CanvasDirection}.
     *
     * @type { CanvasDirection }
     * @default inherit
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Text drawing direction. For details, see {@link CanvasDirection}.
     *
     * @type { CanvasDirection }
     * @default inherit
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    direction: CanvasDirection;
    /**
     * Font style.
     *
     * @type { string }
     * @default normal normal 14px sans-serif
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Font style.
     *
     * @type { string }
     * @default normal normal 14px sans-serif
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Font style.
     *
     * @type { string }
     * @default normal normal 14px sans-serif
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Font style.
     *
     * @type { string }
     * @default normal normal 14px sans-serif
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    font: string;
    /**
     * Text alignment mode. For details, see {@link CanvasTextAlign}.
     *
     * @type { CanvasTextAlign }
     * @default start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Text alignment mode. For details, see {@link CanvasTextAlign}.
     *
     * @type { CanvasTextAlign }
     * @default start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Text alignment mode. For details, see {@link CanvasTextAlign}.
     *
     * @type { CanvasTextAlign }
     * @default start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Text alignment mode. For details, see {@link CanvasTextAlign}.
     *
     * @type { CanvasTextAlign }
     * @default start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    textAlign: CanvasTextAlign;
    /**
     * Text baseline. For details, see {@link CanvasTextBaseline}.
     *
     * @type { CanvasTextBaseline }
     * @default alphabetic
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Text baseline. For details, see {@link CanvasTextBaseline}.
     *
     * @type { CanvasTextBaseline }
     * @default alphabetic
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Text baseline. For details, see {@link CanvasTextBaseline}.
     *
     * @type { CanvasTextBaseline }
     * @default alphabetic
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Text baseline. For details, see {@link CanvasTextBaseline}.
     *
     * @type { CanvasTextBaseline }
     * @default alphabetic
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    textBaseline: CanvasTextBaseline;
    /**
     * Obtains the currently applied transformation matrix.
     *
     * @returns { Matrix2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Obtains the currently applied transformation matrix.
     *
     * @returns { Matrix2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Obtains the currently applied transformation matrix.
     *
     * @returns { Matrix2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Obtains the currently applied transformation matrix.
     *
     * @returns { Matrix2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    getTransform(): Matrix2D;
    /**
     * Resets the current transformation matrix using the identity matrix
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Resets the current transformation matrix using the identity matrix
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Resets the current transformation matrix using the identity matrix
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Resets the current transformation matrix using the identity matrix
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    resetTransform(): void;
    /**
     * Adds the effect of a rotation
     *
     * @param { number } angle - The radian of clockwise rotation, which can be converted to an angle value using the formula:
     *    degree * Math.PI / 180
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Adds the effect of a rotation
     *
     * @param { number } angle - The radian of clockwise rotation, which can be converted to an angle value using the formula:
     *    degree * Math.PI / 180
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Adds the effect of a rotation
     *
     * @param { number } angle - The radian of clockwise rotation, which can be converted to an angle value using the formula:
     *    degree * Math.PI / 180
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Adds the effect of a rotation
     *
     * @param { number } angle - The radian of clockwise rotation, which can be converted to an angle value using the formula:
     *    degree * Math.PI / 180
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    rotate(angle: number): void;
    /**
     * Increases the scaling effect of the X and Y axes.
     *
     * @param { number } x - Horizontal scaling factor
     * @param { number } y - Vertical scaling factor
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Increases the scaling effect of the X and Y axes.
     *
     * @param { number } x - Horizontal scaling factor
     * @param { number } y - Vertical scaling factor
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Increases the scaling effect of the X and Y axes.
     *
     * @param { number } x - Horizontal scaling factor
     * @param { number } y - Vertical scaling factor
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Increases the scaling effect of the X and Y axes.
     *
     * @param { number } x - Horizontal scaling factor
     * @param { number } y - Vertical scaling factor
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    scale(x: number, y: number): void;
    /**
     * Adds 2D transformation effects, including rotation, translation, and scaling.
     *    The current transformation matrix will not be overwritten. Multiple transformations will be superimposed.
     *
     * @param { number } a - Horizontal Zoom
     * @param { number } b - Vertical Tilt
     * @param { number } c - Horizontal Tilt
     * @param { number } d - Vertical Zoom
     * @param { number } e - Horizontal movement
     * @param { number } f - Vertical movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Adds 2D transformation effects, including rotation, translation, and scaling.
     *    The current transformation matrix will not be overwritten. Multiple transformations will be superimposed.
     *
     * @param { number } a - Horizontal Zoom
     * @param { number } b - Vertical Tilt
     * @param { number } c - Horizontal Tilt
     * @param { number } d - Vertical Zoom
     * @param { number } e - Horizontal movement
     * @param { number } f - Vertical movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Adds 2D transformation effects, including rotation, translation, and scaling.
     *    The current transformation matrix will not be overwritten. Multiple transformations will be superimposed.
     *
     * @param { number } a - Horizontal Zoom
     * @param { number } b - Vertical Tilt
     * @param { number } c - Horizontal Tilt
     * @param { number } d - Vertical Zoom
     * @param { number } e - Horizontal movement
     * @param { number } f - Vertical movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Adds 2D transformation effects, including rotation, translation, and scaling.
     *    The current transformation matrix will not be overwritten. Multiple transformations will be superimposed.
     *
     * @param { number } a - Horizontal Zoom
     * @param { number } b - Vertical Tilt
     * @param { number } c - Horizontal Tilt
     * @param { number } d - Vertical Zoom
     * @param { number } e - Horizontal movement
     * @param { number } f - Vertical movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    /**
     * The 2D transformation effect is added. The current transformation matrix is not overwritten and
     *    the transformations are superimposed for multiple times.
     *
     * @param { Matrix2D } transform - 2D transformation matrix. For details, see {@link Matrix2D}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The 2D transformation effect is added. The current transformation matrix is not overwritten and
     *    the transformations are superimposed for multiple times.
     *
     * @param { Matrix2D } transform - 2D transformation matrix. For details, see {@link Matrix2D}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The 2D transformation effect is added. The current transformation matrix is not overwritten and
     *    the transformations are superimposed for multiple times.
     *
     * @param { Matrix2D } transform - 2D transformation matrix. For details, see {@link Matrix2D}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The 2D transformation effect is added. The current transformation matrix is not overwritten and
     *    the transformations are superimposed for multiple times.
     *
     * @param { Matrix2D } transform - 2D transformation matrix. For details, see {@link Matrix2D}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    setTransform(transform?: Matrix2D): void;
    /**
     * Adds the 2D transformation effect, including rotation, translation, and scaling,
     *    and overwrites the current transformation matrix.
     *
     * @param { number } a - Horizontal Zoom
     * @param { number } b - Vertical Tilt
     * @param { number } c - Horizontal Tilt
     * @param { number } d - Vertical Zoom
     * @param { number } e - Horizontal movement
     * @param { number } f - Vertical movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Adds the 2D transformation effect, including rotation, translation, and scaling,
     *    and overwrites the current transformation matrix.
     *
     * @param { number } a - Horizontal Zoom
     * @param { number } b - Vertical Tilt
     * @param { number } c - Horizontal Tilt
     * @param { number } d - Vertical Zoom
     * @param { number } e - Horizontal movement
     * @param { number } f - Vertical movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Adds the 2D transformation effect, including rotation, translation, and scaling,
     *    and overwrites the current transformation matrix.
     *
     * @param { number } a - Horizontal Zoom
     * @param { number } b - Vertical Tilt
     * @param { number } c - Horizontal Tilt
     * @param { number } d - Vertical Zoom
     * @param { number } e - Horizontal movement
     * @param { number } f - Vertical movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Adds the 2D transformation effect, including rotation, translation, and scaling,
     *    and overwrites the current transformation matrix.
     *
     * @param { number } a - Horizontal Zoom
     * @param { number } b - Vertical Tilt
     * @param { number } c - Horizontal Tilt
     * @param { number } d - Vertical Zoom
     * @param { number } e - Horizontal movement
     * @param { number } f - Vertical movement
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    /**
     * Increases the translation effect of the X and Y axes
     *
     * @param { number } x - Horizontal movement distance
     * @param { number } y - Vertical travel distance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Increases the translation effect of the X and Y axes
     *
     * @param { number } x - Horizontal movement distance
     * @param { number } y - Vertical travel distance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Increases the translation effect of the X and Y axes
     *
     * @param { number } x - Horizontal movement distance
     * @param { number } y - Vertical travel distance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Increases the translation effect of the X and Y axes
     *
     * @param { number } x - Horizontal movement distance
     * @param { number } y - Vertical travel distance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    translate(x: number, y: number): void;
    /**
     * Set a PixelMap to the current context. The drawing content is synchronized to the PixelMap.
     *
     * @param { PixelMap } value - PixelMap object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set a PixelMap to the current context. The drawing content is synchronized to the PixelMap.
     *
     * @param { PixelMap } value - PixelMap object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set a PixelMap to the current context. The drawing content is synchronized to the PixelMap.
     *
     * @param { PixelMap } value - PixelMap object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setPixelMap(value?: PixelMap): void;
    /**
     * transfer ImageBitmap to content.
     *
     * @param { ImageBitmap } bitmap
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * transfer ImageBitmap to content.
     *
     * @param { ImageBitmap } bitmap
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * transfer ImageBitmap to content.
     *
     * @param { ImageBitmap } bitmap
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * transfer ImageBitmap to content.
     *
     * @param { ImageBitmap } bitmap
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    transferFromImageBitmap(bitmap: ImageBitmap): void;
    /**
     * Allocate a layer for subsequent drawing.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    saveLayer(): void;
    /**
     * Remove changes to transform and clip since saveLayer was last called and draw the layer on canvas.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    restoreLayer(): void;
    /**
     * Clear the backing buffer, drawing state stack, any defined paths, and styles.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    reset(): void;
}
/**
 * Draw context object for the Canvas component.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Draw context object for the Canvas component.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Draw context object for the Canvas component.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Draw context object for the Canvas component.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CanvasRenderingContext2D extends CanvasRenderer {
    /**
     * The default value is 0, which is bound to the height of the specified canvas. The value is read-only.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The default value is 0, which is bound to the height of the specified canvas. The value is read-only.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The default value is 0, which is bound to the height of the specified canvas. The value is read-only.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The default value is 0, which is bound to the height of the specified canvas. The value is read-only.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly height: number;
    /**
     * The default value is 0, which is bound to the width of the specified canvas. The value is read-only.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The default value is 0, which is bound to the width of the specified canvas. The value is read-only.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The default value is 0, which is bound to the width of the specified canvas. The value is read-only.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The default value is 0, which is bound to the width of the specified canvas. The value is read-only.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly width: number;
    /**
     * Frame node of the canvas. The default value is null.
     *
     * @type { FrameNode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    readonly canvas: FrameNode;
    /**
     * Generate a character string in the data url format.
     *
     * @param { string } type - Image format. The default value is image/png.
     * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
     *    If the value is out of the range, the default value 0.92 is used.
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Generate a character string in the data url format.
     *
     * @param { string } type - Image format. The default value is image/png.
     * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
     *    If the value is out of the range, the default value 0.92 is used.
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Generate a character string in the data url format.
     *
     * @param { string } type - Image format. The default value is image/png.
     * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
     *    If the value is out of the range, the default value 0.92 is used.
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Generate a character string in the data url format.
     *
     * @param { string } type - Image format. The default value is image/png.
     * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
     *    If the value is out of the range, the default value 0.92 is used.
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    toDataURL(type?: string, quality?: any): string;
    /**
     * Start image analyzer.
     *
     * @param { ImageAnalyzerConfig } config - Image analyzer config.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 110001 - Image analysis feature is not supported.
     * @throws { BusinessError } 110002 - Image analysis is currently being executed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>;
    /**
     * Stop image analyzer.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    stopImageAnalyzer(): void;
    /**
     * Constructor of the canvas drawing context object, which is used to create a drawing context object.
     *
     * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Constructor of the canvas drawing context object, which is used to create a drawing context object.
     *
     * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Constructor of the canvas drawing context object, which is used to create a drawing context object.
     *
     * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Constructor of the canvas drawing context object, which is used to create a drawing context object.
     *
     * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor(settings?: RenderingContextSettings);
    /**
     * Constructor of the canvas drawing context object, which is used to create a drawing context object.
     *
     * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    constructor(settings?: RenderingContextSettings, unit?: LengthMetricsUnit);
    /**
     * Register the listener that watches if the canvasrenderingcontext2d attached to the Canvas frameNode.
     *
     * @param { 'onAttach' } type Indicates the type of event.
     * @param { Callback<void> } callback Indicates the listener.
     * @throws { BusinessError } 401 - Input parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    on(type: 'onAttach', callback: Callback<void>): void;
    /**
     * Unregister the listener that watches if the canvasrenderingcontext2d attached to the Canvas frameNode.
     *
     * @param { 'onAttach' } type Indicates the type of event.
     * @param { Callback<void> } callback Indicates the listener.
     * @throws { BusinessError } 401 - Input parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    off(type: 'onAttach', callback?: Callback<void>): void;
    /**
     * Register the listener that watches if the canvasrenderingcontext2d detached from the Canvas frameNode.
     *
     * @param { 'onDetach' } type Indicates the type of event.
     * @param { Callback<void> } callback Indicates the listener.
     * @throws { BusinessError } 401 - Input parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    on(type: 'onDetach', callback: Callback<void>): void;
    /**
     * Unregister the listener that watches if the canvasrenderingcontext2d detached from the Canvas frameNode.
     *
     * @param { 'onDetach' } type Indicates the type of event.
     * @param { Callback<void> } callback Indicates the listener.
     * @throws { BusinessError } 401 - Input parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    off(type: 'onDetach', callback?: Callback<void>): void;
}
/**
 * Draw context object for the OffscreenCanvas component.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Draw context object for the OffscreenCanvas component.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Draw context object for the OffscreenCanvas component.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Draw context object for the OffscreenCanvas component.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class OffscreenCanvasRenderingContext2D extends CanvasRenderer {
    /**
     * Generate a character string in the data url format.
     *
     * @param { string } type - Image format. The default value is image/png.
     * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
     *    If the value is out of the range, the default value 0.92 is used.
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Generate a character string in the data url format.
     *
     * @param { string } type - Image format. The default value is image/png.
     * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
     *    If the value is out of the range, the default value 0.92 is used.
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Generate a character string in the data url format.
     *
     * @param { string } type - Image format. The default value is image/png.
     * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
     *    If the value is out of the range, the default value 0.92 is used.
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Generate a character string in the data url format.
     *
     * @param { string } type - Image format. The default value is image/png.
     * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
     *    If the value is out of the range, the default value 0.92 is used.
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    toDataURL(type?: string, quality?: any): string;
    /**
     * transfer the content to ImageBitmap
     *
     * @returns { ImageBitmap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * transfer the content to ImageBitmap
     *
     * @returns { ImageBitmap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * transfer the content to ImageBitmap
     *
     * @returns { ImageBitmap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * transfer the content to ImageBitmap
     *
     * @returns { ImageBitmap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    transferToImageBitmap(): ImageBitmap;
    /**
     * Constructor of the canvas drawing context object, which is used to create a drawing context object.
     *
     * @param { number } width - the width of the OffscreenCanvas
     * @param { number } height - the height of the OffscreenCanvas
     * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Constructor of the canvas drawing context object, which is used to create a drawing context object.
     *
     * @param { number } width - the width of the OffscreenCanvas
     * @param { number } height - the height of the OffscreenCanvas
     * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Constructor of the canvas drawing context object, which is used to create a drawing context object.
     *
     * @param { number } width - the width of the OffscreenCanvas
     * @param { number } height - the height of the OffscreenCanvas
     * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Constructor of the canvas drawing context object, which is used to create a drawing context object.
     *
     * @param { number } width - the width of the OffscreenCanvas
     * @param { number } height - the height of the OffscreenCanvas
     * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor(width: number, height: number, settings?: RenderingContextSettings);
    /**
     * Constructor of the canvas drawing context object, which is used to create a drawing context object.
     *
     * @param { number } width - the width of the OffscreenCanvas
     * @param { number } height - the height of the OffscreenCanvas
     * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    constructor(width: number, height: number, settings?: RenderingContextSettings, unit?: LengthMetricsUnit);
}
/**
 * Draw an object off the screen. The drawing content is not directly displayed on the screen.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Draw an object off the screen. The drawing content is not directly displayed on the screen.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Draw an object off the screen. The drawing content is not directly displayed on the screen.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Draw an object off the screen. The drawing content is not directly displayed on the screen.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class OffscreenCanvas {
    /**
     * Height of the off-screen canvas.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Height of the off-screen canvas.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Height of the off-screen canvas.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Height of the off-screen canvas.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    height: number;
    /**
     * Width of the off-screen canvas.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Width of the off-screen canvas.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Width of the off-screen canvas.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Width of the off-screen canvas.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    width: number;
    /**
     * Exports rendered content as an ImageBitmap object
     *
     * @returns { ImageBitmap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Exports rendered content as an ImageBitmap object
     *
     * @returns { ImageBitmap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Exports rendered content as an ImageBitmap object
     *
     * @returns { ImageBitmap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Exports rendered content as an ImageBitmap object
     *
     * @returns { ImageBitmap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    transferToImageBitmap(): ImageBitmap;
    /**
     * Creates the context from the current OffscreenCanvas.
     *
     * @param { "2d" } contextType - The context type, only "2d" be supported now.
     *  "2d": Creates a {@link OffscreenCanvasRenderingContext2D} object representing a two-dimensional rendering context.
     * @param { RenderingContextSettings } options - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @returns { OffscreenCanvasRenderingContext2D } The rendering context of offscreen canvas, see {@link OffscreenCanvasRenderingContext2D}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Creates the context from the current OffscreenCanvas.
     *
     * @param { "2d" } contextType - The context type, only "2d" be supported now.
     *  "2d": Creates a {@link OffscreenCanvasRenderingContext2D} object representing a two-dimensional rendering context.
     * @param { RenderingContextSettings } options - Drawing attribute. For details, see {@link RenderingContextSettings}.
     * @returns { OffscreenCanvasRenderingContext2D } The rendering context of offscreen canvas, see {@link OffscreenCanvasRenderingContext2D}.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getContext(contextType: "2d", options?: RenderingContextSettings): OffscreenCanvasRenderingContext2D;
    /**
     * Constructor of the off-screen canvas, which is used to create an off-screen canvas object.
     *
     * @param { number } width - Width of the off-screen canvas.
     * @param { number } height - Height of the off-screen canvas.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Constructor of the off-screen canvas, which is used to create an off-screen canvas object.
     *
     * @param { number } width - Width of the off-screen canvas.
     * @param { number } height - Height of the off-screen canvas.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Constructor of the off-screen canvas, which is used to create an off-screen canvas object.
     *
     * @param { number } width - Width of the off-screen canvas.
     * @param { number } height - Height of the off-screen canvas.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Constructor of the off-screen canvas, which is used to create an off-screen canvas object.
     *
     * @param { number } width - Width of the off-screen canvas.
     * @param { number } height - Height of the off-screen canvas.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor(width: number, height: number);
    /**
     * Constructor of the off-screen canvas, which is used to create an off-screen canvas object.
     *
     * @param { number } width - Width of the off-screen canvas.
     * @param { number } height - Height of the off-screen canvas.
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    constructor(width: number, height: number, unit: LengthMetricsUnit);
}
/**
 * Size info.
 *
 * @interface Size
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface Size {
    /**
     * Defines the width property.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    width: number;
    /**
     * Defines the height property.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    height: number;
}
/**
 * Defines DrawingRenderingContext.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class DrawingRenderingContext {
    /**
     * Get size of the DrawingRenderingContext.
     *
     * @returns { Size } The size of the DrawingRenderingContext.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get size(): Size;
    /**
     * Get canvas of the DrawingRenderingContext.
     *
     * @returns { DrawingCanvas } The canvas of the DrawingRenderingContext.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get canvas(): DrawingCanvas;
    /**
     * Invalidate the component, which will cause a re-render of the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    invalidate(): void;
    /**
     * Create DrawingRenderingContext with setting LengthMetricsUnit.
     *
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    constructor(unit?: LengthMetricsUnit);
}
/**
 *TextTimer component, which provides the text timer capability.
 *
 * @interface CanvasInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 *TextTimer component, which provides the text timer capability.
 *
 * @interface CanvasInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 *TextTimer component, which provides the text timer capability.
 *
 * @interface CanvasInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 *TextTimer component, which provides the text timer capability.
 *
 * @interface CanvasInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface CanvasInterface {
    /**
     * Construct a canvas component.
     *
     * @param { CanvasRenderingContext2D } context - Canvas context object. For details, see {@link CanvasRenderingContext2D}.
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Construct a canvas component.
     *
     * @param { CanvasRenderingContext2D } context - Canvas context object. For details, see {@link CanvasRenderingContext2D}.
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Construct a canvas component.
     *
     * @param { CanvasRenderingContext2D } context - Canvas context object. For details, see {@link CanvasRenderingContext2D}.
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Construct a canvas component.
     *
     * @param { CanvasRenderingContext2D } context - Canvas context object. For details, see {@link CanvasRenderingContext2D}.
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Construct a canvas component.
     *
     * @param { CanvasRenderingContext2D | DrawingRenderingContext } context - Canvas context object.
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    (context?: CanvasRenderingContext2D | DrawingRenderingContext): CanvasAttribute;
    /**
     * Construct a canvas component.
     *
     * @param { CanvasRenderingContext2D | DrawingRenderingContext } context - Canvas context object.
     * @param { ImageAIOptions } imageAIOptions
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    (context: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions: ImageAIOptions): CanvasAttribute;
}
/**
 * Provides attribute for Canvas.
 *
 * @extends CommonMethod<CanvasAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides attribute for Canvas.
 *
 * @extends CommonMethod<CanvasAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides attribute for Canvas.
 *
 * @extends CommonMethod<CanvasAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides attribute for Canvas.
 *
 * @extends CommonMethod<CanvasAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CanvasAttribute extends CommonMethod<CanvasAttribute> {
    /**
     * Event notification after the canvas component is constructed. You can draw the canvas at this time.
     *
     * @param { function } event
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Event notification after the canvas component is constructed. You can draw the canvas at this time.
     *
     * @param { function } event
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Event notification after the canvas component is constructed. You can draw the canvas at this time.
     *
     * @param { function } event
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Event notification after the canvas component is constructed. You can draw the canvas at this time.
     *
     * @param { function } event
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onReady(event: () => void): CanvasAttribute;
    /**
     * Enable image analyzer for Canvas.
     *
     * @param { boolean } enable - If enable image analyzer for Canvas. The default value is false.
     * @returns { CanvasAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    enableAnalyzer(enable: boolean): CanvasAttribute;
}
/**
 * Defines Canvas Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Canvas Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Canvas Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Canvas Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Canvas: CanvasInterface;
/**
 * Defines Canvas Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Canvas Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Canvas Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Canvas Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const CanvasInstance: CanvasAttribute;
